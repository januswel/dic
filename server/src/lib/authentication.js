// @flow

import firebase from './firebase'

type ProviderId = string
type AccessToken = string
type Email = string
type IconUrl = string
export type Account = {
  providerId: ProviderId,
  accessToken: AccessToken,
  email: Email,
  iconUrl: IconUrl,
}

export const signIn = (): Promise<Account> => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => ({
      providerId: result.credential.providerId,
      accessToken: result.credential.accessToken,
      email: result.user.email,
      iconUrl: result.user.photoURL,
    }))
}

export const signOut = (): Promise<void> => firebase.auth().signOut()
