// @flow

import $ from 'cheerio'
import fetch from 'node-fetch'

const DICTIONARIES = {
    ALC: 'https://eow.alc.co.jp/search?q=${keyword}',
}
const DEFAULT = 'ALC'

const main = async (keyword: string, site: string = DEFAULT) => {
    const url = DICTIONARIES[site]
    console.log(url)

    const response = await fetch(url)
    const html = await response.text()
    console.log(html)

    const dom = $(html)
    console.log(dom)
}

main('dictionary')
