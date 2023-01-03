import { useRecoilValue } from "recoil"
import {CartRecoil} from "../Recoil/CartRecoil"
import {CartLength} from "../Recoil/CartLength"
import { useState } from "react";
import {CartItem} from './CartItem'
import './Cart.css'

export const Cart = () =>{
    const cartItems = useRecoilValue(CartRecoil);
    const cartLength = useRecoilValue(CartLength);
    const [displayCart,setDisplayCart] = useState(false);

    const showCart = () =>{
        setDisplayCart((prev)=>!prev)
    }

    return (
        <div className="CART">
          <div className="cart-button" onClick={showCart}>
            <span className = 'cart1'>Cart</span>
            <span>{cartLength}</span>
          </div>
          {displayCart && cartLength > 0 && (
            <div className="cart2">
              {cartItems.map((item) => (
                <CartItem props = {item}/>
              ))}
            </div>
          )}
        </div>
      );
}

