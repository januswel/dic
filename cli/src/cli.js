// @flow

import cliParser from 'commander'

import VERSION from './lib/version'
import lookup from './'

type Config = {
  target: string,
  service?: string,
}

const OPTIONS = [
  {
    SHORT: 's',
    LONG: 'service',
    TYPE: 'string',
    DESCRIPTION: 'specify dictionary service',
  },
]

const RAW_ARGUMENT_INDEX = 0
const parseArguments = () => {
  cliParser.version(VERSION)

  OPTIONS.forEach(OPTION => {
    const VALUE_TEMPLATE = OPTION.TYPE === 'string' ? ' [value]' : ''
    cliParser.option(`-${OPTION.SHORT}, --${OPTION.LONG}${VALUE_TEMPLATE}`, OPTION.DESCRIPTION)
  })

  cliParser.parse(process.argv)
}

const buildConfiguration = () => {
  parseArguments()

  const config: Config = {
    target: cliParser.args[RAW_ARGUMENT_INDEX],
  }
  if (!config.target) {
    throw new Error('Specify a word or a sentense to lookup')
  }

  if (cliParser.service) {
    config.service = cliParser.service
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
