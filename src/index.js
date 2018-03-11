// @flow

import cheerio from 'cheerio'
import fetch from 'node-fetch'

import resolveService from './lib/resolve-service'
import DEFAULTS from './defaults'

const main = async (keyword: string, service: string = DEFAULTS.SERVICE) => {
  try {
    const config = resolveService(service)

    const urlTemplate = config.url
    const url = urlTemplate.replace('${keyword}', encodeURIComponent(keyword))
    console.log(url)

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
