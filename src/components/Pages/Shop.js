import React from 'react'
import Item from '../Product/Item'
import Item2 from '../Product/Item2'
import Newsletter from '../Banner/Newsletter'

function Shop() {
  return (
    <div>
        <section id="page-header">
        
        <h2>#stayhome</h2>
        
        <p>Save more with coupons & up to 70% off!</p>
        
    </section>
    <section id="product1" className="section-p1">
        <Item/>
        <Item2/>
    </section>
    {/* <section id="pagination" class="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i class="fa fa-arrow-right"></i></a>

    </section> */}
    <Newsletter/>
    </div>
  )
}

export default Shop