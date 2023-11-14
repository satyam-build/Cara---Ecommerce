import React from 'react'
import f1 from '../media/img/features/f1.png'
import f2 from '../media/img/features/f2.png'
import f3 from '../media/img/features/f3.png'
import f4 from '../media/img/features/f4.png'
import f5 from '../media/img/features/f5.png'
import f6 from '../media/img/features/f6.png'
import { Link } from 'react-router-dom'

function Feature(){
    return (
        <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src={f1} alt="" /> 
            <h6>Free Shiping</h6>
        </div>
        <div className="fe-box">
            <img src={f2} alt="" /> 
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={f3} alt="" /> 
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src={f4} alt="" /> 
            <h6>Promotion</h6>
        </div>
         <div className="fe-box">
            <img src={f5} alt="" /> 
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
            <img src={f6} alt="" /> 
            <h6>24/7 Support</h6>
        </div>
    </section>
    )
}
function Banner() {
  return (
    <div>
      <section id="main">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to='/shop'><button>Shop Now</button></Link>
    </section>
    <Feature/>
    </div>
  )
}

export default Banner;
export {Feature};