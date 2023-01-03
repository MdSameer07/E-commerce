import { useRecoilState } from "recoil"
import {CartRecoil as Cart} from "../Recoil/CartRecoil"
import './AddToCart.css'
import { useState } from "react"

const update = (items,idx,item) =>{
    if(item.inCartQuantity===0){
        return [...items.slice(0,idx),...items.slice(idx+1)]
    }else{
        return [...items.slice(0,idx),item,...items.slice(idx+1)]
    }
}

export const AddToCart = ({props}) => {
    const [itemsInCart,setItemsInCart] = useRecoilState(Cart);
    const idx = itemsInCart.findIndex((item)=>item.id===props.data.data.id)
    const itemInCart = idx>=0 ? itemsInCart[idx] : undefined
    let newCart = undefined;
    const [disabled,setDisabled] = useState(props.data.data.quantity>0?false:true)
    const incrementQuantity = () =>{
        if(itemInCart){
            newCart = update(itemsInCart,idx,{
                ...itemInCart,
                inCartQuantity : itemInCart.inCartQuantity+1
            })
        }else{
            newCart = [...itemsInCart,
            {
                id: props.data.data.id,
                description: props.data.data.description,
                name: props.data.data.name,
                image: props.data.data.image,
                inCartQuantity: 1,
                price: props.data.data.price,
            }]
        }
        setItemsInCart(newCart)
    }
    const decrementQuantity = () =>{
        newCart = update(itemsInCart,idx,{
            ...itemInCart,
            inCartQuantity : itemInCart.inCartQuantity-1
        })
        setItemsInCart(newCart)
    }
    const handleClickIncrement = () =>{
        if(itemInCart.inCartQuantity+1<props.data.data.quantity){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
    const handleClickDecrement = () =>{
        if(itemInCart.inCartQuantity-1<props.data.data.quantity){
            setDisabled(false)
        }else{
            setDisabled(true)
        }

    }
    if(itemInCart){
        return(
        <div className = 'AddRemove'>
            <div className = 'Remove' onClick = {()=>{decrementQuantity();handleClickDecrement();}}> - </div>
            <div className = 'Quantity'>{itemInCart.inCartQuantity}</div>
            {!disabled && (<div className = 'Add' onClick = {()=>{incrementQuantity();handleClickIncrement();}}> + </div>)}
        </div>
        )
    }else{
        return(
            <div className = 'ATC-button' onClick = {incrementQuantity}>Add To Cart</div>
        )

    }

}