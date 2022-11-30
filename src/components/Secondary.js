import Product from './Product'
import './Secondary.css'

const Secondary = () =>{
    return (
        <div className = 'Products-list'>
            <div className = 'each-product'><Product/></div>
            <div className = 'each-product'><Product/></div>
            <div className = 'each-product'><Product/></div>
            <div className = 'each-product'><Product/></div>
            <div className = 'each-product'><Product/></div>
            <div className = 'each-product'><Product/></div>
        </div>
    )
}

export default Secondary