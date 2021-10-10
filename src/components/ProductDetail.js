import React from 'react'
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

export const ProductDetail = () => {
    const { id } = useParams()
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(product)
    const  fetchProduct = async () => {
        const  response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                            .catch(err=>{
                                console.log(err)
                            })
        dispatch(selectedProduct(response.data))
    }
    
    useEffect(() => {
        if(id && id !== "")  fetchProduct()
        return ( ) =>{
            dispatch(removeSelectedProduct())
        }
        }, [id])


    return (
        <div>
            <h4>{product.title}</h4>
            <img src={product.image} alt="is" style={{width:"150px", height:"150px"}} />

            <h4>{product.description}</h4>
            <h5>{product.price}</h5>
        </div> 
    )
}
