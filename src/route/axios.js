import axios from "axios";


export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`,
});
// TOKEN
export const ApiKey = {
  "apiKeyToken": "ece0d40ce8d1ec5fa311e7f799b01ff9a212bc4595040b3f341ec765776ce3c5"
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

// get tracks
export const tracks = 'track'
