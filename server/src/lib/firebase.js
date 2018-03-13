// @flow

import * as firebase from 'firebase'

const { API_KEY, PROJECT_ID, MESSAGING_SENDER_ID, DATABASE_NAME } = process.env

const CONFIG = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`,
  projectId: PROJECT_ID,
  storageBucket: '',
  messagingSenderId: MESSAGING_SENDER_ID,
}

firebase.initializeApp(CONFIG)
export default firebase
