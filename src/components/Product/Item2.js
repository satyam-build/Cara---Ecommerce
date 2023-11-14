import React,{useContext} from 'react'
import { CartContext } from '../../Cartcontext'
import data from '../data.json';

// import n1 from "../media/img/products/n1.jpg"
// import n2 from "../media/img/products/n2.jpg"
// import n3 from "../media/img/products/n3.jpg"
// import n4 from "../media/img/products/n4.jpg"
// import n5 from "../media/img/products/n5.jpg"
// import n6 from "../media/img/products/n6.jpg"
// import n7 from "../media/img/products/n7.jpg"
// import n8 from "../media/img/products/n8.jpg"
function Item2() {
    const {addToCart} = useContext(CartContext);

    const prod = data.productList2;

    function handleAdd(value) {
        addToCart(value);
    }
  return (
        <div className="pro-container">
             {prod.map((item)=>{
                return (
            <div className="pro" id='item1' key={item.id}>
                <img src={item.imgUrl} alt="Hello" />
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

export default Item2