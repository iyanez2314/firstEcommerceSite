import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const HeroBanner = ({bannerData}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{bannerData[0].smallText}</p>
            <h3>{bannerData[0].midText}</h3>
            <h1>{bannerData[0].largeText1}</h1>
            <img src={urlFor(bannerData[0].image)} alt="headphones" className='hero-banner-image'/>
            <div>
                <Link href={`/products/${bannerData[0].product}`}>
                    <button type='button'>{bannerData[0].buttonText}</button>
                </Link>    
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>
                            {bannerData[0].desc}
                        </p>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroBanner