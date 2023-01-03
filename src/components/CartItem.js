import React from 'react'
import './CartItem.css'

export const CartItem = ({props}) =>{
    return(
        <div className='Item'>
            <div className='Image'>
                <img src = {props.image} alt = 'Product'/>
            </div>
            <div className='Description'>
                <strong>{props.name}</strong>
                <p>{props.description}</p>
                <p>Quantity : {props.inCartQuantity}</p>
                <p>Price : <strong>${props.price*props.inCartQuantity}</strong></p>
            </div>
        </div>
    )
}