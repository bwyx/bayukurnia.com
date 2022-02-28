const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN || ''

const basicToken = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

export const getAccessToken = async () => {
  const url = 'https://accounts.spotify.com/api/token'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + basicToken
  }

  const formData = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })

  const response = await fetch(url, {
    method: 'POST',
    body: formData.toString(),
    headers
  })

  return response.json()
}

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken()
  const url = 'https://api.spotify.com/v1/me/player/currently-playing'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + access_token
  }

  const response = await fetch(url, { headers })

  return response.json()
}
