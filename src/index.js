// @flow

import cheerio from 'cheerio'
import fetch from 'node-fetch'

import DEFAULTS from './defaults'

import resolveService from './lib/resolve-service'
import buildUrl from './lib/build-url'

const main = async (keyword: string, service: string = DEFAULTS.SERVICE) => {
  try {
    const config = resolveService(service)
    console.log(`using service: ${config.title}`)

    const url = buildUrl(config, keyword)

    const response = await fetch(url)
    const html = await response.text()
    // console.log(html)

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
