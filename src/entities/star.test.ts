import { Star } from './star'

describe('Star', () => {
  it('static constructor uses cache', () => {
    expect(Star.onChain(1) === Star.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Star.onChain(1) !== Star.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Star.onChain(1).equals(Star.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Star.onChain(1).equals(Star.onChain(1))).toEqual(true)
  })
})
