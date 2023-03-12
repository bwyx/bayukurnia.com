import type { KVNamespace } from '@cloudflare/workers-types'

export interface Auth {
  clientId: string
  clientSecret: string
  refreshToken: string
}

export const getAccessToken = async (
  { clientId, clientSecret, refreshToken }: Auth,
  CACHE?: KVNamespace
) => {
  const cachedAccessToken = await CACHE?.get('spotify:access_token')

  if (cachedAccessToken) return cachedAccessToken

  const url = 'https://accounts.spotify.com/api/token'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
  }

  const formData = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })

  const { access_token, expires_in } = await fetch(url, {
    method: 'POST',
    body: formData.toString(),
    headers
  }).then((r) => r.json())

  CACHE?.put('spotify:access_token', access_token, {
    expirationTtl: expires_in
  })

  return access_token
}

export const getCurrentlyPlaying = async (accessToken: string) => {
  const url = 'https://api.spotify.com/v1/me/player/currently-playing'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken
  }

  const response = await fetch(url, { headers })

  if (response.status === 200) return <Record<string, any>>response.json()
  return null
}
