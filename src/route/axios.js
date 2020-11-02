import axios from "axios";


export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`,
});
// TOKEN
export const ApiKey = {
  "apiKeyToken": "ae264722356a385b5b0f9e0cb91e26dc5ccfb3ca90af8f853bb76d89ed758edc"
}

// create end points
// Post Album
export const getAlbum = "album";
// Get Album
export const getAlbumId = "album/:albumid";
// Create a new play list
export const PlayList = 'playlist'
// autenticaón
export const auth = '/auth/activate/'
// get signUp
export const signUp = "auth/sign-up";
// check Login
export const signIn = '/auth/sign-in';
// get List Top 20

