import * as firebase from 'firebase'
import invariant from 'invariant'

const { API_KEY, PROJECT_ID, MESSAGING_SENDER_ID, DATABASE_NAME } = process.env

invariant(PROJECT_ID, 'Set environment variable "PROJECT_ID"')
invariant(DATABASE_NAME, 'Set environment variable "DATABASE_NAME"')

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
