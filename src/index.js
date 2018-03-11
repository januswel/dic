// @flow

import DEFAULTS from './defaults'

import resolveService from './lib/resolve-service'
import buildUrl from './lib/build-url'
import fetchHtml from './lib/fetch-html'
import findResults from './lib/find-results'
import getHead from './lib/get-head'
import formatPretty from './lib/format-pretty'

const main = async (keyword: string, service: string = DEFAULTS.SERVICE) => {
  try {
    const config = resolveService(service)
    console.log(`using service: ${config.title}`)

    const url = buildUrl(config, keyword)
    console.log(`fetching from ${url}`)

    const html = await fetchHtml(url)

    const allResults = findResults(html, config.selector)
    const results = getHead(allResults, DEFAULTS.NUMOF_DISPLAY)

    console.log(formatPretty(results))
  } catch (e) {
    console.log(e)
  }
}

export default main
