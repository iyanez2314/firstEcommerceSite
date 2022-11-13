import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const Product = ({products}) => {
    console.log(products.name);
  return (
    <div>
        <Link href={`/products/${products.slug.current}`}>
            <div className='product-card'>
                <img src={urlFor(products.image[0])}
                    width={250}
                    height={250}
                    className='product-image'
                />
                <p className='product-name'>
                    {products.name}
                </p>
                <p className='product-price'>
                    ${products.price}
                </p>
            </div>
        </Link>
    </div>
  )
}

export default Product