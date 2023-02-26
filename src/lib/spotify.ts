interface SpotifyAuth {
  clientId: string
  clientSecret: string
  refreshToken: string
}

export const getAccessToken = async ({
  clientId,
  clientSecret,
  refreshToken
}: SpotifyAuth) => {
  const url = 'https://accounts.spotify.com/api/token'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
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

export const getCurrentlyPlaying = async (auth: SpotifyAuth) => {
  const { access_token } = await getAccessToken(auth)
  const url = 'https://api.spotify.com/v1/me/player/currently-playing'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + access_token
  }

  const response = await fetch(url, { headers })

  if (response.status === 200) return <Record<string, any>>response.json()
  return null
}
