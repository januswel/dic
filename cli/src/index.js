// @flow

import DEFAULTS from './defaults'

import { resolveService, buildUrl, fetchHtml, findResults, getHead, formatPretty } from './lib'

const lookup = async (target: string, service: string = DEFAULTS.SERVICE) => {
  try {
    const config = resolveService(service)
    console.log(`using service: ${config.title}`)

    const url = buildUrl(config.url, target)
    console.log(`fetching from ${url}`)

    const html = await fetchHtml(url)

    const allResults = findResults(html, config.selector)
    const results = getHead(allResults, DEFAULTS.NUMOF_DISPLAY)

    console.log(formatPretty(results))
  } catch (e) {
    console.log(e)
  }
}

export default lookup
