import {Event, Party} from './models'
import axios from 'axios'
import {createAuthProvider} from "./auth";

const apiURL ='http://localhost:3000/' ||  process.env.API_URL

const ax = axios.create({
  baseURL: apiURL
})

export const {useAuth, authGet, authPost, login, logout} = createAuthProvider(ax);

export const getAllEvents = () => authGet("events")
  .then(r => r.data.items.map(Event))
  .catch(error => {
    console.log(error);
    throw error;
  });

export const getAllParties = () => authGet("parties")
  .then(r => r.data.items.map(Party));

export const getEventById = id => {
  return getAllEvents().then(events => events.find(e => e.id = id));
};

export const signIn = (email, password) => ax.post(
  'login',
  {email, password});

export const signUp = user => ax.post(
  'register',
  user
);

export const requiredQuery = (i, params) => ax.get(
  `required-query/${i}`,
  {params}
);
