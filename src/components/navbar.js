import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import p0 from "./media/img/logo.png";

function Navbar() {
    // const ToggleClassIcon=()=>{
    //     const search = document.querySelector('.search');
    //     search.classList.toggle('active');
    // }
    const ToggleClassClear =()=>{
        document.getElementById("mysearch").value="";
     }
     const ToggleBar =()=>{
        const nav = document.getElementById('navbar');
        nav.classList.add('active' )
    }
    const ToggleActive = ()=>{
        const nav = document.getElementById('navbar');

        nav.classList.remove('active' )
    }
    useEffect(()=>{
        const bar = document.getElementById('bar');
const close = document.getElementById('close');
console.log()

if(bar){
    ToggleBar();
}
if(close){
    ToggleActive();
}

// searchbar
//  const icon = document.querySelector('.icon');
//  const search = document.querySelector('.search');
//  const clear = document.getElementById('clear');


//    if (icon) {
//     ToggleClassIcon();
//     }
   
//     if(clear){
//         ToggleClassClear();
//     }
},[])
    return (
        <section id="header">
        <a href="/"><img src={p0} className="logo" alt="" /></a>
        
        <div>
            <ul id="navbar">
                {/* <li id="lg-bag">
                    <div className="search">
                        <div onClick={ToggleClassIcon} className="icon"></div>
                        <div className="input">
                            <input type="text" placeholder="Search" id="mysearch" />
                        </div>
                        <span id='clear' onClick={ToggleClassClear} className="clear" ></span>
                    </div>
                </li>   */}
                <li><Link className=" navA" to='/'>Home</Link></li>
                <li><Link className='navA ' to="/shop">Shop</Link></li>
                {/* <li><Link className='navA active' to="/categories">Categories</Link></li> */}
                <li><Link className='navA' to="/about">About</Link></li>
                {/* <li><Link className='navA' to="/contact">Blog</Link></li> */}
                <li id="lg-bag"><Link to="/cart" ><i className="fa fa-shopping-cart"></i></Link></li>
                {/* <li id="lg-bag"><Link  to="/user"><i className="fa fa-user"></i></Link></li> */}
                <a href="/" id="close"><i className="fa fa-times"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <div className="search searchh">
                {/* <div onClick={ToggleClassIcon} className="icon iconn"></div>
                <div className="input">
                    <input type="text" placeholder="Search" id="mysearch" />
                </div> */}
                <span onClick={ToggleClassClear} className="clear" ></span>
                {/* onClick="document.getElementById('mysearch').value = '' wwrite it in between span */}
            </div>
            <a href="/"><i className="fa fa-shopping-bag"></i></a>
            <i id="bar" className="fas fa-outdent"></i>
            
           
        </div>

    </section>
  )
}

export default Navbar