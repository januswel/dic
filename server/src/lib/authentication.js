// @flow

import firebase from './firebase'

type ProviderId = string
type AccessToken = string
type Secret = string
type Id = string
type Email = string
type TwitterScreenName = string
type IconUrl = string
export type Account = {
  id: Id,
  providerId: ProviderId,
  accessToken: AccessToken,
  secret?: Secret,
  contact: Email | TwitterScreenName,
  iconUrl: IconUrl,
}

export type OauthProviderName = 'google' | 'twitter'
type GoogleAdditionalUserInfo = {
  profile: {
    id: Id,
  },
}
type TwitterAdditionalUserInfo = {
  profile: {
    id: Id,
    screen_name: TwitterScreenName,
  },
}
type GoogleUser = {
  email: Email,
  photoURL: IconUrl,
}
type TwitterUser = {
  photoURL: IconUrl,
}
type ResponseTemplate<AdditionalUserInfo, User> = {
  additionalUserInfo: AdditionalUserInfo,
  credential: {
    providerId: ProviderId,
    accessToken: AccessToken,
    secret?: Secret,
  },
  user: User,
}
type GoogleAuthenticationResponse = ResponseTemplate<GoogleAdditionalUserInfo, GoogleUser>
type TwitterAuthenticationResponse = ResponseTemplate<TwitterAdditionalUserInfo, TwitterUser>
type OauthProvider = {
  [name: OauthProviderName]: {
    proxy: firebase.auth.GoogleAuthProvider | firebase.auth.TwitterAuthProvider,
    mapper: (GoogleAuthenticationResponse => Account) | (TwitterAuthenticationResponse => Account),
  },
}
const oauthProvider: OauthProvider = {
  google: {
    proxy: new firebase.auth.GoogleAuthProvider(),
    mapper: (result: GoogleAuthenticationResponse) => ({
      id: result.additionalUserInfo.profile.id,
      providerId: result.credential.providerId,
      accessToken: result.credential.accessToken,
      contact: result.user.email,
      iconUrl: result.user.photoURL,
    }),
  },
  twitter: {
    proxy: new firebase.auth.TwitterAuthProvider(),
    mapper: (result: TwitterAuthenticationResponse) => ({
      id: result.additionalUserInfo.profile.id,
      providerId: result.credential.providerId,
      accessToken: result.credential.accessToken,
      secret: result.credential.secret,
      contact: result.additionalUserInfo.profile.screen_name,
      iconUrl: result.user.photoURL,
    }),
  },
}

export const signIn = (oauthProviderName: OauthProviderName): Promise<Account> => {
  const provider = oauthProvider[oauthProviderName]

  return firebase
    .auth()
    .signInWithPopup(provider.proxy)
    .then(result => provider.mapper(result))
}

export const signOut = (): Promise<void> => firebase.auth().signOut()
