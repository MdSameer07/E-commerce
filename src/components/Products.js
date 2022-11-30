import Description2 from './Description2'
import Image from './Image'
import './Products.css'

export const Products = () =>{
    return (
        <div className = 'Product'>
            <Image width='400px' height='400px'/>
            <Description2/>
        </div>
    )
}