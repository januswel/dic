// @flow

import * as firebase from 'firebase'

const { API_KEY, PROJECT_ID, MESSAGING_SENDER_ID, DATABASE_NAME } = process.env
if (!PROJECT_ID) {
  throw new Error('Set environment variable "PROJECT_ID"')
}
if (!DATABASE_NAME) {
  throw new Error('Set environment variable "DATABASE_NAME"')
}

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
