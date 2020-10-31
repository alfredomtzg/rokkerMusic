import axios from 'axios';

export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`
})

// create end points
// Post Album
export const getAlbum = 'album';
// Get Album
export const getAlbumId = 'album/:albumid'


// get signUp
export const signUp = '';
// check Login
export const login = '';
// get List Top 20
export const listTop = '';
