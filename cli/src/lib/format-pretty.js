// @flow

export default (src: Array<string>) => {
  return src.map(item => item.trim()).join('\n\n')
}
