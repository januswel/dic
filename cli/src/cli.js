// @flow

// TODO: use `commander` package
import minimist from 'minimist'
import lookup from './'

type Config = {
  target: string,
  service?: string,
  needsToShowHelp?: boolean,
}

const generateHelp = () => 'Usage: dic <a word or a sentense to lookup>'

const ARGUMENTS_TOP_INDEX = 2
const RAW_ARGUMENT_INDEX = 0
const processArguments = () => {
  const parsed = minimist(process.argv.slice(ARGUMENTS_TOP_INDEX))

  const config: Config = {
    target: parsed._[RAW_ARGUMENT_INDEX],
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
      // eslint-disable-next-line no-console
      console.log(generateHelp())
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
