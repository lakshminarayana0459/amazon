import React from 'react'
import { useStateValue } from './StateProvider'

import "./Checkout.css";

import BnnaerImage from "../src/assets/banner.png"

import CheckoutProduct from "./CheckoutProduct";

import SubTotal from "./SubTotal";

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkou__left">
           <img className="checkout__ad"src={BnnaerImage}/> 
           {
               basket?.length === 0 ? (
                   <div> hello basket empy
                       </div>
               ) : (
                <div>
                  {basket.map((item) => (
                    <CheckoutProduct 
                    id ={item.id}
                    title = {item.title}
                    image = {item.image}
                    price={item.price}
                    rating={item.rating}/>
                  ))}
                  </div>
               )}
               </div>
               {basket.length>0 && (
                   <div className="chckout__right">
                       <SubTotal />
                       </div>
               )}
        </div>

    );
}

export default Checkout
