import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Assessment from './pages/Assessment'
import SummaryInterview from './pages/SummaryInterview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/summary-interview" element={<SummaryInterview />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
