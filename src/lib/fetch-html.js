// @flow

import fetch from 'node-fetch'

export default async (url: string) => {
  const response = await fetch(url)
  const html = await response.text()
  return html
}
