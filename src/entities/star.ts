// import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
// import { WETH9 } from './weth9'

/**
 * Star is the main usage of a 'native' currency, i.e. for Starcoin mainnet and all testnets
 */
export class Star extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 9, 'STC', 'STC')
  }

  public get wrapped(): Token {
    // const weth9 = WETH9[this.chainId]
    // invariant(!!weth9, 'WRAPPED')
    // return weth9
    return new Token(
      this.chainId,
      '0x00000000000000000000000000000001::STC::STC',
      this.decimals,
      this.symbol,
      this.name
    )
  }

  private static _starCache: { [chainId: number]: Star } = {}

  public static onChain(chainId: number): Star {
    return this._starCache[chainId] ?? (this._starCache[chainId] = new Star(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
