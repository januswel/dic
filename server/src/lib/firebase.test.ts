import firebase from './firebase'

describe('firebase', () => {
  it('returns initialized FireBase object', () => {
    const pattern = /\d/
    const actual = firebase.SDK_VERSION
    expect(pattern.test(actual)).toBe(true)
  })
})
