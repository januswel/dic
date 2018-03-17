// @assert

import assert from 'assert'

import getHead from './get-head'

describe('getHead', () => {
  it('returns an array of the head of specified array', () => {
    const items = [0, 1, 2, 3, 4]
    const expected = [0, 1]
    const actual = getHead(items, 2)
    assert.deepEqual(expected, actual)
  })
})
