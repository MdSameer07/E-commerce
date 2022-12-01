import {useProductsData} from '../hooks/useProductsData'
import Product from './Product'
import './ProductsBody.css'

const ProductsBody = () =>{
    const {isLoading,data,isError,error} = useProductsData()
    if(isLoading){
        return <h2>Loading..</h2>
      }
      if(isError){
        return <h2>{error.message}</h2>
      }
      return (
        <div className = 'Products-list'>
        {data.data.map((product)=>{
            // return (
            //     <div className = 'each-product'><Product id = {product.id} name = {product.name} 
            //     image = {product.image} description = {product.description} 
            //     quantity = {product.quantity} price = {product.price}/></div>
            // )
            return (
              <div className = 'each-product'><Product data = {product}/></div>
            )
        })}
        </div>
      )
}

export default ProductsBody