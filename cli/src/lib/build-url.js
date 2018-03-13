// @flow

export default (urlTemplate: string, target: string) => urlTemplate.replace('${target}', encodeURIComponent(target))
