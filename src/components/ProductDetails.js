import Description2 from './Description2'
import Image from './Image'
import './ProductDetails.css'
import {useProductData} from '../hooks/useProductData'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const ProductDetails = () =>{
    const id = useParams().id
    const [image,setImage] = useState(null)
    const {isLoading,data,isError,error,isFetched} = useProductData(id)
    if(isLoading){
        return <h2>Loading..</h2>
      }
      if(isError){
        return <h2>{error.message}</h2>
      }

      if(isFetched && image===null){
        setImage(data.data.image)
      }
      
      const settingVariantImage = (image) =>{
        setImage(image)
      }
      
      return (
        <div className = 'Product'>
            <Image src = {image} alt = {data.data.description} width = '40%' height = '40%'></Image>
            <Description2 data = {data} onClick = {settingVariantImage}></Description2>
        </div>
      )
}


