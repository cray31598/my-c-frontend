import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignUp.module.css'

const WORK_EXPERIENCE_OPTIONS = [
  { value: '', label: 'Select' },
  { value: '3+', label: '3+' },
  { value: '5+', label: '5+' },
  { value: '7+', label: '7+' },
  { value: '10+', label: '10+' },
  { value: '15+', label: '15+' },
  { value: '20+', label: '20+' },
]

const GENDERS = [
  { value: '', label: 'Select' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
]

const AGREEMENT_TEXT =
  'I agree not to copy code from any source, including colleagues, and will refrain from accessing websites or AI tools for assistance. Additionally, I commit to maintaining the confidentiality of this platform by not copying, sharing, or disclosing any content or questions through any medium or platform. *'

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    experienceYears: '',
    socialLink: '',
    gender: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  const validate = () => {
    const err = {}
    if (!form.email.trim()) err.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Please enter a valid email address.'
    if (!form.fullName.trim()) err.fullName = 'Full name is required.'
    if (!form.experienceYears) err.experienceYears = 'Work experience is required.'
    if (!form.socialLink.trim()) err.socialLink = 'Social link is required.'
    if (!agreed) err.agreed = 'You must agree to the terms to continue.'
    return err
  }

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    setTouched({ email: true, fullName: true, experienceYears: true, socialLink: true })
    if (Object.keys(err).length > 0) return

    const candidate = { ...form, agreed, registeredAt: new Date().toISOString() }
    try {
      localStorage.setItem('assessment_candidate', JSON.stringify(candidate))
    } catch (_) {}

    navigate('/assessment')
  }

  const getError = (name) => touched[name] && errors[name]

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {/* Left: Intro */}
        <section className={styles.intro}>
          <h1 className={styles.title}>
            Let's Get Started — Your <span className={styles.titleHighlight}>Challenge Awaits</span>
          </h1>
          <p className={styles.body}>
            You've been invited to complete the hiring evaluation for the{' '}
            <strong>Partner - Operations & Institutional Services</strong> position. This test is
            hosted via our secure platform and is designed to help us better understand your skills
            and potential fit.
          </p>
          <p className={styles.review}>Please review the details below before you begin.</p>
          <div className={styles.infoBox}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Test duration:</span>
              <span className={styles.infoValue}>20 mins</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>No. of questions:</span>
              <span className={styles.infoValue}>24 questions (3 sections)</span>
            </div>
          </div>
        </section>

        {/* Right: Form */}
        <section className={styles.formSection}>
          <p className={styles.formIntro}>
            Before we start, here is some extra information we need to assess you better.
          </p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="email">
                Email address <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError('email') ? styles.inputError : ''}
                autoComplete="email"
              />
              {getError('email') && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="fullName">
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError('fullName') ? styles.inputError : ''}
                autoComplete="name"
              />
              {getError('fullName') && <span className={styles.error}>{errors.fullName}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="experienceYears">
                Work Experience (in years) <span className={styles.required}>*</span>
              </label>
              <select
                id="experienceYears"
                name="experienceYears"
                value={form.experienceYears}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError('experienceYears') ? styles.inputError : ''}
              >
                {WORK_EXPERIENCE_OPTIONS.map((opt) => (
                  <option key={opt.value || 'empty'} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {getError('experienceYears') && (
                <span className={styles.error}>{errors.experienceYears}</span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="socialLink">
                Social Links (LinkedIn, Twitter, ...) <span className={styles.required}>*</span>
              </label>
              <input
                id="socialLink"
                name="socialLink"
                type="url"
                placeholder="Enter your social link"
                value={form.socialLink}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getError('socialLink') ? styles.inputError : ''}
                autoComplete="url"
              />
              {getError('socialLink') && <span className={styles.error}>{errors.socialLink}</span>}
            </div>

            <div className={styles.demoSection}>
              <h3 className={styles.demoTitle}>DEMOGRAPHIC INFORMATION (OPTIONAL)</h3>
              <p className={styles.demoDisclaimer}>
                The following information is kept confidential and will only be used to help us
                foster a diverse and inclusive community.
              </p>
              <div className={styles.field}>
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getError('gender') ? styles.inputError : ''}
                >
                  {GENDERS.map((opt) => (
                    <option key={opt.value || 'empty'} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {getError('gender') && <span className={styles.error}>{errors.gender}</span>}
              </div>
            </div>

            <div className={styles.agreement}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className={styles.checkbox}
                  aria-describedby={errors.agreed ? 'agreement-error' : undefined}
                />
                <span className={styles.checkboxText}>{AGREEMENT_TEXT}</span>
              </label>
              {errors.agreed && (
                <span id="agreement-error" className={styles.error}>
                  {errors.agreed}
                </span>
              )}
            </div>

            <button type="submit" className={styles.submit}>
              Continue
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
