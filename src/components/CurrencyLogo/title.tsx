import Image from "next/image";
import React from "react";

export default function CurrencyLogoWithTitle() {
  return (
      <div>
          <div className="flex pl-2" style={{marginBottom:'50px'}}>
              <Image
                  src={'https://sunflowerswap.io/logo.png'}
                  alt={'SUNF'}
                  width="80px"
                  height="80px"
                  objectFit="contain"
                  className="rounded-md"
              />
              <div className="px-3 py-2 text-primary text-bold text-4xl" style={{color:"#fff"}}>SunFlower</div>
          </div>
          <div style={{color:"red", marginBottom:'20px'}}>
              Please note: SUNF is currently a test token, please do not participate in the transaction before the official version is released.
          </div>
      </div>
  )
}
