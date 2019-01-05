import commander from 'commander'

import VERSION from './lib/version'
import lookup from './'

type Config = {
  target: string
  service?: string
}

const OPTIONS = [
  {
    SHORT: 's',
    LONG: 'service',
    TYPE: 'string',
    DESCRIPTION: 'specify dictionary service',
  },
]

const parseArguments = () => {
  commander.version(VERSION).arguments('<words>')

  OPTIONS.forEach(OPTION => {
    const VALUE_TEMPLATE = OPTION.TYPE === 'string' ? ' [value]' : ''
    commander.option(`-${OPTION.SHORT}, --${OPTION.LONG}${VALUE_TEMPLATE}`, OPTION.DESCRIPTION)
  })

  commander.parse(process.argv)
}

const buildConfiguration = () => {
  parseArguments()

  const config: Config = {
    target: commander.args.join(' '),
  }
  if (!config.target) {
    throw new Error('Specify a word or a sentense to lookup')
  }

  if (commander.service) {
    config.service = commander.service
  }

  return config
}

export default () => {
  try {
    const config = buildConfiguration()

    if (config.service) {
      lookup(config.target, config.service)
      return
    }

    lookup(config.target)
  } catch (e) {
    console.error(e.message)
  }
}
