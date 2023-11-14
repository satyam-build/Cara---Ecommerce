import React from 'react'
import Banner from '../Banner/banner1'
import Products1 from '../Product/Products1'
import Products2 from '../Product/Products2'
import Banner3 from '../Banner/banner3'
import Newsletter from '../Banner/Newsletter'

function Home() {
  return (
    <div>
        <Banner/>
      <Products1/>
      <Products2/>
      <Banner3/>
      <Newsletter/>
    </div>
  )
}

export default Home