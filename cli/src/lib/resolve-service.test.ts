import resolveService from './resolve-service'

describe('resolveService', () => {
  it('', () => {
    const service = resolveService('ALC')
    expect(typeof service.title).toBe('string')
  })
})
