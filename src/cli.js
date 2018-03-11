// @flow

import minimist from 'minimist'
import lookup from './'

type Args = {
  target: string,
  service?: string,
  needsToShowHelp?: boolean,
}

const generateHelp = () => {
  return 'Usage: dic <a word or a sentense to lookup>'
}

const processArguments = () => {
  const parsed = minimist(process.argv.slice(2))

  const config: Config = {
    target: parsed._[0],
  }

  if (parsed.h || parsed.help) {
    config.needsToShowHelp = true
  }

  if (!config.target) {
    throw new Error('Specify a word or a sentense to lookup')
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
      lookup(config.target, config.service)
      return
    }

    lookup(config.target)
  } catch (e) {
    console.error(e.message)
    console.error(generateHelp())
  }
}
