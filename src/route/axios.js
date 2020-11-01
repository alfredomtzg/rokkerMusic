import axios from "axios";

export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`,
});
// TOKEN
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0ZWEwNTFjMWM0ZDgwOGE3MjQzYzIiLCJuYW1lIjoiQ0FSTE9TIiwiZW1haWwiOiJjZ3V6bWFuQGV4cHJlc3NpbmdlbmllcmlhLmNvbSIsInNjb3BlcyI6WyJzaWduX2luOmF1dGgiLCJzaWduX3VwOmF1dGgiLCJzaWduX3Byb3ZpZGVyOmF1dGgiLCJyZWFkOmFsYnVtIiwicmVhZDphcnRpc3QiLCJyZWFkOmdlbmRlciIsInJlYWQ6dHJhY2siLCJyZWFkOnVzZXIiLCJ1cGRhdGU6dXNlciIsInJlYWQ6c2VhcmNoSGlzdG9yeSIsImNyZWF0ZTpwbGF5bGlzdHMiLCJ1cGRhdGU6cGxheWxpc3RzIiwiZGVsZXRlOnBsYXlsaXN0cyIsInJlYWQ6cGxheWxpc3RzIl0sImlhdCI6MTYwNDIwNzYwNSwiZXhwIjoxNjA0MjA5NDA1fQ.AsMRxJPk4NkOzrEyztHYbcF0lmu404HhtvzH2uS21BY";

// create end points
// Post Album
export const getAlbum = "album";
// Get Album
export const getAlbumId = "album/:albumid";
// Create a new play list
export const PlayList = "playlist";

// get signUp
export const signUp = "auth/sign-up";
// check Login
export const login = "";
// get List Top 20
export const listTop = "";
