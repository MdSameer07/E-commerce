import {useQuery} from 'react-query'
import axios from 'axios'

const fetchProductData = (id) =>{
    return axios.get(`https://obscure-refuge-62167.herokuapp.com/products/${id}`)
}

export const useProductData = (id) =>{
    return useQuery(['product',id],()=>fetchProductData(id))
}