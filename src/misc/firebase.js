import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBDmeWVKO_pGtmOtVQIFaiHaMaNN7dbPyw',
  authDomain: 'chat-web-app-30772.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-30772-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-30772',
  storageBucket: 'chat-web-app-30772.appspot.com',
  messagingSenderId: '383769098246',
  appId: '1:383769098246:web:756bd960579947df33ab87',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
