import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Assessment from './pages/Assessment'
import SummaryInterview from './pages/SummaryInterview'
import AdminMaster from './pages/AdminMaster'
import InvitePage from './pages/InvitePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/invite/:inviteLink" element={<InvitePage />} />
      <Route path="/invite/:inviteLink/summary-interview" element={<SummaryInterview />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/summary-interview" element={<SummaryInterview />} />
      <Route path="/admin-master" element={<AdminMaster />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
