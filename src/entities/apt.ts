// import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'

/**
 * Apt is the main usage of a 'native' currency, i.e. for Aptos mainnet and all testnets
 */
export class Apt extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 8, 'APT', 'APT')
  }

  public get wrapped(): Token {
    return new Token(
      this.chainId,
      '0x1::aptos_coin::AptosCoin',
      this.decimals,
      this.symbol,
      this.name
    )
  }

  private static _aptCache: { [chainId: number]: Apt } = {}

  public static onChain(chainId: number): Apt {
    return this._aptCache[chainId] ?? (this._aptCache[chainId] = new Apt(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
