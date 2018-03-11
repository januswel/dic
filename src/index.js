// @flow

import cheerio from 'cheerio'

import DEFAULTS from './defaults'

import resolveService from './lib/resolve-service'
import buildUrl from './lib/build-url'
import fetchHtml from './lib/fetch-html'

const main = async (keyword: string, service: string = DEFAULTS.SERVICE) => {
  try {
    const config = resolveService(service)
    console.log(`using service: ${config.title}`)

    const url = buildUrl(config, keyword)
    console.log(`fetching from ${url}`)

    const html = await fetchHtml(url)

    const $ = cheerio.load(html)
    const matched = $(config.selector)
    const converted = matched.map((i, el) => $(el).text()).get()
    const result = converted.slice(0, DEFAULTS.NUMOF_DISPLAY)
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

export default main
