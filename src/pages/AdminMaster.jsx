import { useState, useEffect } from 'react'
import { getInvites, createInvite, updateInvite, deleteInvite, generateInviteLinkNotInList } from '../api/invites'
import styles from './AdminMaster.module.css'

export default function AdminMaster() {
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [actionLoading, setActionLoading] = useState(null)
  const [generatedLink, setGeneratedLink] = useState('')

  const loadInvites = async () => {
    try {
      setError(null)
      const list = await getInvites()
      setInvites(list)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadInvites()
  }, [])

  const [addEmail, setAddEmail] = useState('')

  const handleCreate = async () => {
    setActionLoading('create')
    setError(null)
    try {
      await createInvite(generatedLink || undefined, addEmail.trim() || undefined)
      setGeneratedLink('')
      setAddEmail('')
      await loadInvites()
    } catch (e) {
      setError(e.message)
    } finally {
      setActionLoading(null)
    }
  }

  const handleStatusChange = async (inviteLink, connectionsStatus) => {
    setActionLoading(inviteLink)
    setError(null)
    try {
      await updateInvite(inviteLink, { connections_status: Number(connectionsStatus) })
      await loadInvites()
    } catch (e) {
      setError(e.message)
    } finally {
      setActionLoading(null)
    }
  }

  const handleDelete = async (inviteLink) => {
    if (!window.confirm(`Delete invite "${inviteLink}"?`)) return
    setActionLoading(`delete-${inviteLink}`)
    setError(null)
    try {
      await deleteInvite(inviteLink)
      await loadInvites()
    } catch (e) {
      setError(e.message)
    } finally {
      setActionLoading(null)
    }
  }

  const handleGenerate = () => {
    setError(null)
    const existingLinks = invites.map((inv) => inv.invite_link)
    const link = generateInviteLinkNotInList(existingLinks)
    setGeneratedLink(link)
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <p className={styles.muted}>Loading invites…</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Admin – Invite links</h1>
          <p className={styles.subtitle}>CRUD for invite links</p>

          <div className={styles.generateBlock}>
            <input
              type="text"
              readOnly
              className={styles.input}
              value={generatedLink}
              placeholder="Generated link (not in DB yet)"
              aria-label="Generated invite link"
            />
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={handleGenerate}
            >
              Generate invite link
            </button>
          </div>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={handleCreate}
            disabled={actionLoading === 'create'}
          >
            {actionLoading === 'create' ? 'Adding…' : 'Add invite link'}
          </button>
        </header>

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invite link</th>
                <th>Email</th>
                <th>Connections status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invites.length === 0 ? (
                <tr>
                  <td colSpan={4} className={styles.empty}>
                    No invites yet. Click “Add invite link” to create one.
                  </td>
                </tr>
              ) : (
                invites.map((inv) => (
                  <tr key={inv.invite_link}>
                    <td>
                      <code className={styles.code}>{inv.invite_link}</code>
                    </td>
                    <td>
                      <span className={styles.emailCell}>{inv.email || '—'}</span>
                    </td>
                    <td>
                      <select
                        value={String(inv.connections_status)}
                        onChange={(e) =>
                          handleStatusChange(
                            inv.invite_link,
                            e.target.value
                          )
                        }
                        disabled={actionLoading === inv.invite_link}
                        className={styles.select}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={styles.btnDanger}
                        onClick={() => handleDelete(inv.invite_link)}
                      >
                        {actionLoading === `delete-${inv.invite_link}`
                          ? '…'
                          : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
