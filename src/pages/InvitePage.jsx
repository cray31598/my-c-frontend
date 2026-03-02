import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getInviteByLink } from '../api/invites'
import SignUp from './SignUp'
import styles from './InvitePage.module.css'

export default function InvitePage() {
  const { inviteLink } = useParams()
  const [invite, setInvite] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!inviteLink) {
      setError('Invalid invite link')
      setLoading(false)
      return
    }
    let cancelled = false
    getInviteByLink(inviteLink)
      .then((data) => {
        if (!cancelled) {
          setInvite(data)
          setError(null)
          try {
            sessionStorage.setItem('invite_link', inviteLink)
            sessionStorage.setItem('invite_connections_status', String(data.connections_status))
          } catch (_) {}
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message?.includes('not found') ? 'Invalid or expired invite link' : e.message)
          setInvite(null)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [inviteLink])

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.center}>
          <p className={styles.muted}>Loading invite…</p>
        </div>
      </div>
    )
  }

  if (error || !invite) {
    return (
      <div className={styles.page}>
        <div className={styles.center}>
          <p className={styles.error}>{error || 'Invalid invite link'}</p>
        </div>
      </div>
    )
  }

  const canContinue = invite.connections_status === 0
  return <SignUp canContinue={canContinue} inviteLink={inviteLink} />
}
