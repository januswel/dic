// @flow

import minimist from 'minimist'
import lookup from './'

type Args = {
  keyword: string,
  service?: string,
  needsToShowHelp?: boolean,
}

const generateHelp = () => {
  return 'Usage: dic <word or sentense to lookup>'
}

const processArguments = () => {
  const parsed = minimist(process.argv.slice(2))

  const config: Config = {
    keyword: parsed._[0],
  }

  if (parsed.h || parsed.help) {
    config.needsToShowHelp = true
  }

  if (!config.keyword) {
    throw new Error('specify a keyword to lookup dictionary')
  }

  if (parsed.service) {
    config.service = parsed.service
  }

  return config
}

export default () => {
  try {
    const config = processArguments()

    if (config.needsToShowHelp) {
      console.log(needsToShowHelp)
      return
    }

    if (config.service) {
      lookup(config.keyword, config.service)
      return
    }

    lookup(config.keyword)
  } catch (e) {
    console.error(e.message)
    console.error(generateHelp())
  }
}
