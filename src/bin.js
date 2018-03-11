// @flow

import minimist from 'minimist'
import lookup from './'

const processArguments = () => {
  const parsed = minimist(process.argv.slice(2))
  const args = {
    keyword: parsed._[0],
  }

  if (!args.keyword) {
    throw new Error('specify a keyword to lookup dictionary')
  }

  if (parsed.service) {
    args.service = parsed.service
  }

  return args
}

export default () => {
  try {
    const args = processArguments()
    console.log(args)

    if (args.service) {
      lookup(args.keyword, args.service)
      return
    }

    lookup(args.keyword)
  } catch (e) {
    console.error(e.message)
  }
}
