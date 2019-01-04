import cheerio from 'cheerio'

export default (html: string, selector: string) => {
  const $ = cheerio.load(html)
  const matched = $(selector)
  const converted = matched.map((_, el) => $(el).text()).get()
  return converted
}
