import React, { useContext } from 'react'
import Image from 'next/image'
import { formatNumberScale } from '../../functions/format'
import { useTokenStatsModalToggle } from '../../state/application/hooks'
import { useWeb3React } from '@web3-react/core'
import TokenStatsModal from '../../modals/TokenStatsModal'
import { ChainId } from '../../sdk'
import { PriceContext } from '../../contexts/priceContext'

const supportedTokens = {
  SDN: {
    name: 'SDN',
    symbol: 'SDN',
    icon: 'https://shiden.subscan.io/static/img/shiden.526f0686.png',
  },
  SUNF: {
    name: 'SUNF',
    symbol: 'SUNF',
    icon: '/images/tokens/solar.png',
    address: {
      [ChainId.SDN]: '0x9931C65d4F6EEb08bA3626C6715AE40E104527e8',
    },
  },
}

interface TokenStatsProps {
  token: string
}

function TokenStatusInner({ token }) {
  const toggleModal = useTokenStatsModalToggle(token)

  const priceData = useContext(PriceContext)

  let price = 0;
  if (token.symbol.toLowerCase() == 'sdn'){
    price = priceData?.['movr'];
  }
  if (token.symbol.toLowerCase() == 'sunf'){
    price = priceData?.['solar'];
  }

  return (
    <div className="flex pl-2" onClick={toggleModal}>
      {token.icon && (
        <Image
          src={token['icon']}
          alt={token['symbol']}
          width="24px"
          height="24px"
          objectFit="contain"
          className="rounded-md"
        />
      )}
      <div className="px-3 py-2 text-primary text-bold" style={{color:"#fff"}}>
        {formatNumberScale(price, true, 2)}
      </div>
    </div>
  )
}

export default function TokenStats({ token, ...rest }: TokenStatsProps) {
  const selectedToken = supportedTokens[token]
  return (
    <>
      <TokenStatusInner token={selectedToken} />
      <TokenStatsModal token={selectedToken} />
    </>
  )
}
