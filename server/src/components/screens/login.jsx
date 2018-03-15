// @flow

import React from 'react'

import type AuthenticationUserStory from '../../redux/user-stories/authentication'

type Props = {
  actions: {
    authentication: AuthenticationUserStory,
  },
}

export default (props: Props) => <button onClick={() => props.actions.authentication.login()}>Login Here!</button>
