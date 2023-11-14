import React from 'react'

function Newsletter() {
  return (
    <div>
            <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For Newsletter</h4>
            <p>Get E-mail updates about out latest shop and <span>special offers</span>.</p> 
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
        </div>
    </section>
    </div>
  )
}

export default Newsletter