import Image from './Image'
import Description1 from './Description1'
import './Product.css'

const Product = () =>{
    return (
        <div className = 'Single-Product'>
            <Image width='200px' height='200px'/>
            <Description1/>
        </div>
    )
}

export default Product