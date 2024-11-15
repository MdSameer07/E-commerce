import {useQuery} from 'react-query'
import axios from 'axios'

const fetchProductsData = () =>{
    return axios.get('http://localhost:4000/Products')
}

export const useProductsData = () =>{
    return useQuery('Products',fetchProductsData)
}