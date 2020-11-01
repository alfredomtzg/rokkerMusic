import axios from 'axios';

export const API = axios.create({
  // baseURL: Music app
  baseURL: `https://rokker-music-app-test.herokuapp.com/api/`
})
// TOKEN
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjliN2M5ZmExZjNmODAwMTcyOGE4MGYiLCJuYW1lIjoiQ2FybG9zIiwiZW1haWwiOiJpbmcuY2FnbkBnbWFpbC5jb20iLCJzY29wZXMiOlsic2lnbl9pbjphdXRoIiwic2lnbl91cDphdXRoIiwic2lnbl9wcm92aWRlcjphdXRoIiwicmVhZDphbGJ1bSIsInJlYWQ6YXJ0aXN0IiwicmVhZDpnZW5kZXIiLCJyZWFkOnRyYWNrIiwicmVhZDp1c2VyIiwidXBkYXRlOnVzZXIiXSwiaWF0IjoxNjA0MTc2NTcyLCJleHAiOjE2MDQxNzgzNzJ9.nlszhZU5bVMaL0pD1VCUO21xfkvqpG_KKRaRGFQZ-04";

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
