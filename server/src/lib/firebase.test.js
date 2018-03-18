// @flow

import assert from 'assert'

import firebase from './firebase'

describe('firebase', () => {
  it('returns initialized FireBase object', () => {
    const pattern = /\d/
    const actual = firebase.SDK_VERSION
    assert(pattern.test(actual))
  })
})
