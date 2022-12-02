import Image1 from './Image1'
import Description1 from './Description1'
import './Product.css'

const Product = (props) =>{
    return (
        <div className = 'Single-Product'>
            {/* <div>{props.description}</div> */}
            <Image1 src = {props.image} alt = {props.description} width = '200px' height ='200px'/>
            <Description1 name = {props.name} description = {props.description} price = {props.price}/>
        </div>
    )
}

export default Product