// @flow

export default (config: Config, keyword: string) => {
  const urlTemplate = config.url
  const url = urlTemplate.replace('${keyword}', encodeURIComponent(keyword))
  return url
}
