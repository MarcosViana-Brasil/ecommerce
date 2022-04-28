import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { Product, FooterBanner, HeroBanner } from '../src/components'
import { client } from '../src/lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers There of many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return { props: { products, bannerData } }
}

export default Home
