import './Description2.css'
import {GetVariants} from './GetVariants'

const Description2 = (props) =>{
    return (
        <div className = 'desc2'>
            <h3>{props.data.data.name}</h3>
            <p>{props.data.data.description}</p>
            <p>Price : <strong>${props.data.data.price}</strong></p>
            {props.data.data.quantity===0 && <p>Unavailable</p>}
            {props.data.data.quantity>10 && <p>Available</p>}
            {props.data.data.quantity<=10 && <p>Selling Fast</p>}
            <p>Quantity : {props.data.data.quantity}</p>
            <p><GetVariants variants = {props.data.data.variants} onClick = {props.onClick}/></p>
            <button className = 'ATC-button'>Add to cart</button>
        </div>
    )
}

export default Description2