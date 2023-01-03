import {selector} from 'recoil'
import {CartRecoil} from './CartRecoil'

export const CartLength = selector({
    key : 'Cart-Length',
    get : ({get})=>{
        const cartItems = get(CartRecoil)
        return cartItems.length
    }
})