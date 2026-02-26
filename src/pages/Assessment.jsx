import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { QUESTIONNAIRES } from '../data/questions'
import styles from './Assessment.module.css'

const TOTAL_QUESTIONS = QUESTIONNAIRES.reduce((sum, q) => sum + q.questions.length, 0)

function getSelectionKey(qIndex, questionId) {
  return `${qIndex}-${questionId}`
}

export default function Assessment() {
  const navigate = useNavigate()
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selections, setSelections] = useState({})
  const [registered, setRegistered] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('assessment_candidate')
      setRegistered(!!stored)
      if (!stored) navigate('/', { replace: true })
    } catch (_) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const questionnaire = QUESTIONNAIRES[currentQIndex]
  const questions = questionnaire?.questions ?? []
  const question = questions[currentQuestionIndex]
  const questionNumber = currentQIndex * 8 + currentQuestionIndex + 1
  const selectedAnswerId = question ? selections[getSelectionKey(currentQIndex, question.id)] : null
  const allAnswered = Object.keys(selections).length === TOTAL_QUESTIONS
  const isFirstQuestion = currentQIndex === 0 && currentQuestionIndex === 0
  const isLastQuestion =
    currentQIndex === QUESTIONNAIRES.length - 1 &&
    currentQuestionIndex === questions.length - 1
  const canFinish = isLastQuestion && allAnswered

  const handleSelect = (answerId) => {
    if (!question) return
    setSelections((prev) => ({
      ...prev,
      [getSelectionKey(currentQIndex, question.id)]: answerId,
    }))
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((i) => i - 1)
    } else if (currentQIndex > 0) {
      setCurrentQIndex((i) => i - 1)
      setCurrentQuestionIndex(QUESTIONNAIRES[currentQIndex - 1].questions.length - 1)
    }
  }

  const handleNext = () => {
    if (canFinish) {
      try {
        localStorage.setItem('assessment_completed', 'true')
      } catch (_) {}
      navigate('/summary-interview', { replace: true })
      return
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1)
    } else if (currentQIndex < QUESTIONNAIRES.length - 1) {
      setCurrentQIndex((i) => i + 1)
      setCurrentQuestionIndex(0)
    }
  }

  if (!registered || !question) {
    return (
      <div className={styles.page}>
        <div className={styles.loading}>Loading…</div>
      </div>
    )
  }

  const progressPercent = (questionNumber / TOTAL_QUESTIONS) * 100

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>
            Questionnaire {currentQIndex + 1} of {QUESTIONNAIRES.length}
          </span>
          <h2 className={styles.questionnaireTitle}>{questionnaire.title}</h2>
          {questionnaire.description && (
            <p className={styles.questionnaireDescription}>{questionnaire.description}</p>
          )}
        </div>

        <div className={styles.progress}>
          <span className={styles.progressText}>
            Question {currentQuestionIndex + 1} of {questions.length}
            <span className={styles.progressTotal}>
              {' '}
              · {questionNumber} of {TOTAL_QUESTIONS} total
            </span>
          </span>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={questionNumber}
              aria-valuemin={1}
              aria-valuemax={TOTAL_QUESTIONS}
            />
          </div>
        </div>

        <h3 className={styles.questionText}>{question.text}</h3>

        <fieldset className={styles.answers} aria-label="Choose one answer">
          {question.answers.map((answer) => (
            <label
              key={answer.id}
              className={
                selectedAnswerId === answer.id
                  ? `${styles.option} ${styles.optionSelected}`
                  : styles.option
              }
            >
              <input
                type="radio"
                name={`q-${currentQIndex}-${question.id}`}
                value={answer.id}
                checked={selectedAnswerId === answer.id}
                onChange={() => handleSelect(answer.id)}
                className={styles.radio}
              />
              <span className={styles.optionText}>{answer.text}</span>
            </label>
          ))}
        </fieldset>

        <div className={styles.nav}>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className={styles.btnPrev}
            aria-label="Previous question"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isLastQuestion && !allAnswered}
            className={styles.btnNext}
            aria-label={isLastQuestion ? 'Finish assessment' : 'Next question'}
            title={isLastQuestion && !allAnswered ? 'Answer all questions to continue' : undefined}
          >
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
