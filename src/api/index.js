import axios from 'axios'
import {createAuthProvider} from "./auth";

const apiURL ='http://localhost:3000/' ||  process.env.API_URL

const ax = axios.create({
  baseURL: apiURL
})

export const {useAuth, authGet, authPost, login, logout} = createAuthProvider(ax);


export const signIn = (email, password) => ax.post(
  'sign-in',
  {email, password});

export const signUp = user => ax.post(
  'sign-up',
  user
);