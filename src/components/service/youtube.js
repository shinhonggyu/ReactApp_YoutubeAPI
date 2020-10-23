class Youtube {
  constructor(key) {
    this.key = key
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    return result.items
    // .then(() => setIsLoading(false))
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=${this.key}`,
      this.getRequestOptions
    )
    const result = await response.json()
    return result.items
  }
}

export default Youtube
