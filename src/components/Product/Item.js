import React,{useContext} from 'react'
import { CartContext } from '../../Cartcontext'
// import f1 from "../media/img/products/f1.jpg"
// import f2 from "../media/img/products/f2.jpg"
// import f3 from "../media/img/products/f3.jpg"
// import f4 from "../media/img/products/f4.jpg"
// import f5 from "../media/img/products/f5.jpg"
// import f6 from "../media/img/products/f6.jpg"
// import f7 from "../media/img/products/f7.jpg"
// import f8 from "../media/img/products/f8.jpg"
import data from '../data.json';

function Item() {
    const prod = data.productList1;
    console.log(prod);
    const {addToCart} = useContext(CartContext);
    function handleAdd(value) {
        addToCart(value);
    }



    return (
        <div className="pro-container">
            {prod.map((item)=>{
                return (
            <div className="pro" id='item1' key={item.id}>
                <img  src={item.imgUrl} alt="Hello" loading='lazy' />
                <div className="des">
                    <span >{item.brand}</span>
                    <h5 >{item.name}</h5>
                    <div className="star" >
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>{item.price}</h4>
                </div>
                <i onClick={() => handleAdd(item)} className="fa fa-shopping-cart cart"></i>
            </div>
            );
            })}

        </div>
    )
}

export default Item