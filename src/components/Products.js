import Description2 from './Description2'
import Image2 from './Image2'
import './Products.css'
import {useProductData} from '../hooks/useProductData'
import { useParams } from 'react-router-dom'

export const Products = () =>{
    const id = useParams().id
    console.log(id)
    const {isLoading,data,isError,error} = useProductData(id)
    if(isLoading){
        return <h2>Loading..</h2>
      }
      if(isError){
        return <h2>{error.message}</h2>
      }
      console.log(data.data.name)
      return (
        <div className = 'Product'>
            <Image2 src = {data.data.image} alt = {data.data.description} width = '500px' height='500px'></Image2>
            <Description2 name = {data.data.name} description = {data.data.description} price = {data.data.price}></Description2>
        </div>
      )
}


