// @flow

import cheerio from 'cheerio'
import fetch from 'node-fetch'

const SERVICES = {
    ALC: {
        TITLE: 'ALC 英辞郎',
        URL: 'https://eow.alc.co.jp/search?q=${keyword}',
        SELECTOR: '#resultsList li:has(.midashi)'
    },
}
const DEFAULT = {
    SERVICE: 'ALC',
    NUMOF_DISPLAY: 10,
}


const main = async (keyword: string, site: string = DEFAULT.SERVICE) => {
    const service = SERVICES[site]
    const urlTemplate = service.URL
    const url = urlTemplate.replace('${keyword}', encodeURIComponent(keyword))
    console.log(url)

    const response = await fetch(url)
    const html = await response.text()
    // console.log(html)

    const $ = cheerio.load(html)

    const matched = $(service.SELECTOR)
    const converted = matched.map((i, el) => $(el).text()).get()
    const result = converted.slice(0, DEFAULT.NUMOF_DISPLAY)
    console.log(result)
}

main('dictionary')
