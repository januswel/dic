import version from './version'

describe('version', () => {
  it('returns version string', () => {
    expect(typeof version).toBe('string')
  })
})
