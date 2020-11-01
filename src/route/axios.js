import axios from 'axios';

export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`
})
// TOKEN
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjllZjIyODE2MWIxOTAwMTczYTlmYTQiLCJuYW1lIjoiQWxmcmVkbyIsImVtYWlsIjoicHNpYWxmcmVkb210ekBnbWFpbC5jb20iLCJzY29wZXMiOlsic2lnbl9pbjphdXRoIiwic2lnbl91cDphdXRoIiwic2lnbl9wcm92aWRlcjphdXRoIiwicmVhZDphbGJ1bSIsInJlYWQ6YXJ0aXN0IiwicmVhZDpnZW5kZXIiLCJyZWFkOnRyYWNrIiwicmVhZDp1c2VyIiwidXBkYXRlOnVzZXIiLCJyZWFkOnNlYXJjaEhpc3RvcnkiLCJjcmVhdGU6cGxheWxpc3RzIiwidXBkYXRlOnBsYXlsaXN0cyIsImRlbGV0ZTpwbGF5bGlzdHMiLCJyZWFkOnBsYXlsaXN0cyJdLCJpYXQiOjE2MDQyNTg0NTUsImV4cCI6MTYwNDI2MDI1NX0.na7E3QDEMMMexS46RCPPTH1BhnpS0y8ZBLiEhBdPZPY";

// create end points
// Post Album
export const getAlbum = 'album';
// Get Album
export const getAlbumId = 'album/:albumid'
// Create a new play list
export const PlayList = 'playlist'

// get signUp
export const signUp = '';
// check Login
export const login = '';
// get List Top 20
export const listTop = '';
