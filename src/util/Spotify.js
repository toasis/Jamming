const cilentID = 6ac2ce2fcfdb4a9db569680b9dd9bde2;
const RedirectURI = "http://localhost:3000/"


const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);}}



    }

const search = async () => {
  try {
    const response = await fetch(https://api.spotify.com/v1/search?type=track&q=TERM);
    if (response.ok) {
    // do something
    }
  }
  catch (error) {
    console.log(error);
  }
}


export default Spotify;
