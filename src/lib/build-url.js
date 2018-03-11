// @flow

export default (urlTemplate: string, keyword: string) => {
  return urlTemplate.replace('${keyword}', encodeURIComponent(keyword))
}
