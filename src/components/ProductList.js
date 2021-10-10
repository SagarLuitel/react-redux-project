import React from 'react'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { ProductComponent } from './ProductComponent'
import { useEffect } from 'react'
import { setProducts } from '../redux/actions/productActions'


export const ProductList = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const  fetchProduct = async () => {
        const  response = await axios.get("https://fakestoreapi.com/products")
                            .catch(err=>{
                                console.log(err)
                            })
        dispatch(setProducts(response.data))
    }
    
    useEffect(() => {
        fetchProduct()
        }, [])
    return (
        <div>
            <ProductComponent />
        </div>
    )
}
