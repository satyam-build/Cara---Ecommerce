import React from 'react'
import f1 from '../media/img/features/f1.png'
import f2 from '../media/img/features/f2.png'
import f3 from '../media/img/features/f3.png'
import f4 from '../media/img/features/f4.png'
import f5 from '../media/img/features/f5.png'
import f6 from '../media/img/features/f6.png'
import Newsletter from '../Banner/Newsletter'
function About() {
  return (
    <div>
      <section id="product1" className="section-p1">
        <div style={{ margin: "0 auto", width: "inherit", maxWidth: "700px" }}>
          <h2>A SHORT STORY OF OUR JOURNEY</h2>
          <h4> delivering modern designs always</h4>
        </div>
        <div style={{ width: "inherit", maxWidth: "900px", margin: "30px auto" }}>
          <p className='roboto' style={{ fontSize: "22px" }}><span style={{ fontSize: "20px", fontWeight: 500 }}>"</span> Welcome to Cara, where style meets sparkle! At Cara, we believe that fashion is not just about clothes; it's about expressing your unique radiance. Our clothing is designed for the dreamers, the trendsetters, and the ones who aren't afraid to shine a little brighter. <br />
            Cara is more than just a clothing brand; it's a celebration of individuality and self-expression. Each piece in our collection is carefully curated to blend comfort with a touch of glamour, ensuring that you not only look good but feel fantastic too.<br />
            From casual chic to statement pieces that steal the spotlight, Cara offers a diverse range of styles to suit every mood and occasion. We believe that fashion should be accessible to all, which is why we strive to provide high-quality, affordable clothing that doesn't compromise on style.<br />
            Join us on a journey of self-discovery and embrace the sparkle within you. Cara - where every outfit tells a story, and you're the star of the show! <span style={{ fontSize: "20px !important", fontWeight: "500 !important" }}>"</span>
          </p>
        </div>
      </section>
      <div style={{ margin: "30px auto" }}>
        <h2 style={{ textAlign: "center" }}>Our Streamlined Assistance to Consumers</h2>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
          <div className='Abtbox' >
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate' >Free Shiping</h4>
              <p className='roboto'>"Indulge in worry-free shopping with free shipping! Explore trendy fashion, must-have gadgets, all delivered to your doorstep at no extra cost. Enjoy a seamless shopping experience with our extensive product range—all benefiting from complimentary shipping. Save on every purchase, ensuring a hassle-free experience. Shop with ease and explore our diverse selection, knowing that getting what you love is effortless and cost-free!"</p>
            </div>
            <img className="fe-boxDuplicate" src={f1} alt="" />
          </div>
          <div className='Abtbox'>
            <img className="fe-boxDuplicate" src={f2} alt="" />
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate'>Online Order</h4>
              <p className='roboto'>Discover the ultimate ease in shopping on our platform. Explore a wide array of products from home and effortlessly place your orders online. With just a few clicks, securely purchase your desired items and expect swift doorstep delivery. Our intuitive system ensures a seamless and satisfying shopping experience. Join our satisfied customers benefiting from our reliable, straightforward online ordering. Start shopping today for a new level of convenience.</p>
            </div>
          </div>
          <div className='Abtbox'>
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate'>Save Money</h4>
              <p className='roboto'>"Discover the art of saving! At Cara, frugality meets quality. Explore an array of products designed to make savings effortless. Enjoy exclusive deals and budget-friendly offers on every purchase. From everyday essentials to coveted items, find the perfect balance between value and cost. We prioritize your pockets without compromising on excellence. Dive into a world where smart shopping is the norm. Elevate your shopping experience with unbeatable prices and remarkable savings. Start saving while you shop with us—because your money matters."</p>
            </div>
            <img className="fe-boxDuplicate" src={f3} alt="" />

          </div>
          <div className='Abtbox'>
            <img className="fe-boxDuplicate" src={f4} alt="" />
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate'>Promotion</h4>
              <p className='roboto'>"At Cara discover unmissable deals, top-tier products, and seamless transactions. Dive into a world of convenience with our user-friendly platform, tailored to elevate your shopping experience. Unveil exclusive promotions, discounts, and a vast array of must-have items at your fingertips. From fashion to tech, home essentials to gifts galore, find it all in one place. Embrace the ease of secure payments and swift deliveries. Join the online shopping evolution – shop smarter, faster, and better with us!"</p>
            </div>
          </div>
          <div className='Abtbox'>
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate'>Happy Sell</h4>
              <p className='roboto'>
              "Embrace 'Happy Selling' at Cara! It's not just about transactions; it's a stellar journey we craft together. Experience the joy of selling on our platform, where your dreams take flight. Elevate your products amidst a constellation of offerings, and let your sales Cara brightly. Happy Selling isn't just a term; it's a promise. We provide the tools, support, and cosmic opportunities to make each sale a celebration. Join us as we navigate the e-commerce cosmos, turning every transaction into a delightful, star-studded experience. Your success is our constellated delight!"
              </p>
            </div>
            <img className="fe-boxDuplicate" src={f5} alt="" />
          </div>
          <div className='Abtbox'>
            <img className="fe-boxDuplicate" src={f6} alt="" />
            <div style={{ width: "500px",margin:"0 10px" }}>
              <h4 className='fe-btn-duplicate'>24/7 Support</h4>
              <p className='roboto'>
              "Experience seamless shopping anytime with our dedicated 24/7 support. At our e-commerce website, customer assistance never rests. Our round-the-clock service ensures instant help, resolving queries, and providing guidance at any hour. Whether day or night, our committed support team is here to guarantee a smooth and stress-free shopping experience. Your convenience is our priority. Feel confident knowing that our assistance is just a click or call away, ensuring your needs are met, swiftly and efficiently, whenever you need us."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About