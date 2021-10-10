import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const ProductComponent = () => {
    const product = useSelector(state => state.allProducts.products)
    return (
        <div style={{display:"flex", }}>
            {product.map((item)=>(
                <div key={item.id} style={{border:"2px solid red", flexWrap:"wrap",  textDecoration:"none"}}>
                    <Link to={`product/${item.id}`} >
                    <h4>{item.title}</h4>
                   <img src={item.image} alt="items" style={{height:"80px"}}/> 
                   <h5>$ {item.price}</h5>
                    </Link>
                </div>
            ))}
            
        </div>
    )
}
