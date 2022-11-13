import React from 'react';
import { Product, HeroBanner, Layout, Navbar, Cart, FooterBanner, Footer } from '../components'
import { client } from '../lib/client';

const Home = ({ products, bannerData}) => {
  return (
   <>
     <HeroBanner bannerData={bannerData}/>
     <div className='products-heading'>
       <h2>Best selling sneakers</h2>
       <p>Sneakers of many variations</p>
     </div>

     <div className='products-container'>
      {products?.map((product) => <Product key={product._id} products={product}/>)}
     </div>

     <FooterBanner footerBanner={bannerData && bannerData[0]}/>
   </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const queryBanner = '*[_type == "banner"]';
  const bannerData = await client.fetch(queryBanner);

  return {
    props: { products, bannerData }
  }
}

export default Home;
