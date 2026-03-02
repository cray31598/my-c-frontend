// In dev: use same origin so Vite proxies /api to backend.
// In prod: use Vercel backend. Set VITE_API_URL to override.
const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : 'https://myproject-backend-roan.vercel.app')

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    const msg = err?.error || res.statusText
    if (res.status === 404) {
      throw new Error(`${msg}. Is the backend running? Start it: cd backend && npm run dev`)
    }
    throw new Error(msg)
  }
  if (res.status === 204) return null
  return res.json()
}

export async function getInvites() {
  const data = await request('/api/invites')
  return data.invites
}

/** Get a single invite by link. Returns { invite_link, connections_status, email } or throws. */
export async function getInviteByLink(inviteLink) {
  const data = await request(`/api/invites/${encodeURIComponent(inviteLink)}`)
  return data.invite
}

const INVITE_CODE_LENGTH = 22
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789'

/** Generate a random invite link (same format as backend). */
function randomInviteLink() {
  let s = ''
  for (let i = 0; i < INVITE_CODE_LENGTH; i++) {
    s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  }
  return s
}

/** Generate a unique invite link that is not in the given list (e.g. not in DB). */
export function generateInviteLinkNotInList(existingLinks) {
  const set = new Set(existingLinks || [])
  let link
  do {
    link = randomInviteLink()
  } while (set.has(link))
  return link
}

/** Add an invite. Pass inviteLink and optional email. */
export async function createInvite(inviteLink, email) {
  const body = {}
  if (inviteLink != null && String(inviteLink).trim() !== '') body.invite_link = String(inviteLink).trim()
  if (email != null && String(email).trim() !== '') body.email = String(email).trim()
  const opts = { method: 'POST' }
  if (Object.keys(body).length) opts.body = JSON.stringify(body)
  const data = await request('/api/invites', opts)
  return data.invite
}

/** Update an invite. Pass { connections_status, email } (one or both). */
export async function updateInvite(inviteLink, updates) {
  const data = await request(`/api/invites/${encodeURIComponent(inviteLink)}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  })
  return data.invite
}

export async function deleteInvite(inviteLink) {
  await request(`/api/invites/${encodeURIComponent(inviteLink)}`, {
    method: 'DELETE',
  })
}
