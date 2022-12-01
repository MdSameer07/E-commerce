import './Description2.css'
import {GetVariants} from './GetVariants'

const Description2 = (data) =>{
    // console.log(data.data.data.price)
    return (
        <div className = 'desc2'>
            <h3>{data.data.data.name}</h3>
            <p>{data.data.data.description}</p>
            <p>Price : <strong>${data.data.data.price}</strong></p>
            {data.data.data.quantity===0 && <p>Unavailable</p>}
            {data.data.data.quantity>10 && <p>Available</p>}
            {data.data.data.quantity<=10 && <p>Selling Fast</p>}
            <p>Quantity : {data.data.data.quantity}</p>
            <p><GetVariants variants = {data.data.data.variants} onClick = {data.onClick}/></p>
            <button className = 'ATC-button'>Add to cart</button>
        </div>
    )
}

export default Description2