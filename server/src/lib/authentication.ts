import firebase from './firebase'

type ProviderId = string
type AccessToken = string
type Secret = string
type Id = string
type Email = string
type TwitterScreenName = string
type IconUrl = string
export interface Account {
  id: Id
  providerId: ProviderId
  accessToken: AccessToken
  secret?: Secret
  contact: Email | TwitterScreenName
  iconUrl: IconUrl
}

export type OauthProviderName = 'google' | 'twitter'
interface GoogleAdditionalUserInfo {
  profile: {
    id: Id
  }
}
interface TwitterAdditionalUserInfo {
  profile: {
    id: Id
    screen_name: TwitterScreenName
  }
}
interface GoogleUser {
  email: Email
  photoURL: IconUrl
}
interface TwitterUser {
  photoURL: IconUrl
}
interface ResponseTemplate<AdditionalUserInfo, User> {
  additionalUserInfo: AdditionalUserInfo
  credential: {
    providerId: ProviderId
    accessToken: AccessToken
    secret?: Secret
  }
  user: User
}
type GoogleAuthenticationResponse = ResponseTemplate<GoogleAdditionalUserInfo, GoogleUser>
type TwitterAuthenticationResponse = ResponseTemplate<TwitterAdditionalUserInfo, TwitterUser>
interface OauthProvider {
  //TODO: [name: OauthProviderName]: {
  [name: string]: {
    proxy: firebase.auth.GoogleAuthProvider | firebase.auth.TwitterAuthProvider
    mapper: any
    //TODO: mapper: (GoogleAuthenticationResponse => Account) | (TwitterAuthenticationResponse => Account)
  }
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
