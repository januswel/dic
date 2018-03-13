import React from 'react'
import ReactDOM from 'react-dom'
import firebase from './lib/firebase'

console.log(firebase)

ReactDOM.render(<h1>Firebase {firebase.SDK_VERSION}</h1>, document.getElementById('root'))
