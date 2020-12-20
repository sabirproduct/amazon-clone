import React from 'react';
import"./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
const[{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.media-amazon.com/images/G/31/img20/AmazonPay/Travel/Ingresses/September/V1_Prime_Flights_770x150_Dashboard-BTF_PC._CB406649561_.jpg" alt=""></img>

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Busket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        ></CheckoutProduct>
                    ))}
                    


                </div>
            </div>
            <div className="checkout__right">
               <Subtotal/>
            </div>
         
        </div>
    )
}

export default Checkout
