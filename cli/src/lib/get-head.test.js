// @assert

import assert from 'assert'

import getHead from './get-head'

describe('getHead', () => {
  it('returns an array of the head of specified array', () => {
    const NUMOF_HEAD = 2

    /* eslint-disable no-magic-numbers */
    const items = [0, 1, 2, 3, 4]
    const expected = [0, 1]
    /* eslint-enable no-magic-numbers */

    const actual = getHead(items, NUMOF_HEAD)
    assert.deepEqual(expected, actual)
  })
})
