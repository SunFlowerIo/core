import { ChainId } from '../sdk'

export type TokenInfo = {
  id: string
  name: string
  symbol: string
  decimals?: number
}

type PairInfo = {
  id: number
  lpToken: string
  token0: TokenInfo
  token1?: TokenInfo
  name?: string
  symbol?: string
}

type AddressMap = {
  [chainId: number]: {
    [id: string]: PairInfo
  }
}

export const VAULTS: AddressMap = {
  [ChainId.SDN]: {
    '0': {
      id: 0,
      lpToken: '0x9931C65d4F6EEb08bA3626C6715AE40E104527e8',
      token0: {
        id: '0x9931C65d4F6EEb08bA3626C6715AE40E104527e8',
        name: 'SUNF',
        symbol: 'SUNF',
        decimals: 18,
      },
    },
    '1': {
      id: 1,
      lpToken: '0x05Bcebb9b5b914aD52Ed87801904AfCe359e694F',
      token0: {
        id: '0x05Bcebb9b5b914aD52Ed87801904AfCe359e694F',
        name: 'WSDN',
        symbol: 'WSDN',
        decimals: 18,
      },
    }
  },
}
