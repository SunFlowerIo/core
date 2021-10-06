import { ChainId } from '../sdk'
import {SOLAR_ADDRESS} from './tokens'

export type TokenInfo = {
  id: string
  name: string
  symbol: string
  decimals?: number
}

type PairInfo = {
  id: number
  token0: TokenInfo
  token1?: TokenInfo
  name?: string
  symbol?: string
}

type AddressMap = {
  [chainId: number]: {
    [address: string]: PairInfo
  }
}

export const POOLS: AddressMap = {
  [ChainId.SDN]: {
    '0x394A77D511Cb41a6e6D16Ac0A837f34E25A61879': {
      id: 0,
      token0: {
        id: SOLAR_ADDRESS[ChainId.SDN],
        name: 'SUNF',
        symbol: 'SUNF',
        decimals: 18,
      },
      token1: {
        id: '0x05Bcebb9b5b914aD52Ed87801904AfCe359e694F',
        name: 'SDN',
        symbol: 'SDN',
        decimals: 18,
      }
    }
  },
}
