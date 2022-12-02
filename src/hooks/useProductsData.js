import {useQuery} from 'react-query'
import axios from 'axios'

const fetchProductsData = () =>{
    return axios.get('https://obscure-refuge-62167.herokuapp.com/products')
}

export const useProductsData = () =>{
    return useQuery('Products',fetchProductsData)
}