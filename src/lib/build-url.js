// @flow

export default (urlTemplate: string, target: string) => {
  return urlTemplate.replace('${target}', encodeURIComponent(target))
}
