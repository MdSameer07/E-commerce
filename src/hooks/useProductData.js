import {useQuery} from 'react-query'
import axios from 'axios'

const fetchProductData = (id) =>{
    return axios.get(`http://localhost:4000/Products/${id}`)
}

export const useProductData = (id) =>{
    return useQuery(['product',id],()=>fetchProductData(id))
}