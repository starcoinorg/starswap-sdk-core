import { Apt } from './apt'

describe('Apt', () => {
  it('static constructor uses cache', () => {
    expect(Apt.onChain(1) === Apt.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Apt.onChain(1) !== Apt.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Apt.onChain(1).equals(Apt.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Apt.onChain(1).equals(Apt.onChain(1))).toEqual(true)
  })
})
