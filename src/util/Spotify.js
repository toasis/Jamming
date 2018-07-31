class Spotify {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  getAccessToken() {
    if (this.accessToken.length > 0) return this.accessToken;
  }
}

export default Spotify;
