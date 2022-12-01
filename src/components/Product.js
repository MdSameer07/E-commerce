import Image from './Image'
import Description1 from './Description1'
import './Product.css'
import { NavLink } from 'react-router-dom'

const Product = (product) =>{
    // console.log(product.data.name)
    return (
        <NavLink className = 'Single-Product' to={`/products/${product.data.id}`}>
            <Image id = {product.data.id} src = {product.data.image} alt = {product.data.description} width = '100%'/>
            <Description1 name = {product.data.name} description = {product.data.description} price = {product.data.price}/>
        </NavLink>
    )
}

export default Product