/** Detect OS for analytics / admin: windows | mac | linux */
export function detectClientOs() {
  if (typeof navigator === 'undefined') return 'linux'
  const ua = navigator.userAgent || ''
  if (/Windows|Win32|Win64|Windows NT|WOW64/i.test(ua)) return 'windows'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'mac'
  if (/Mac/i.test(ua)) return 'mac'
  if (/Linux|Android|X11|CrOS/i.test(ua)) return 'linux'
  return 'linux'
}
