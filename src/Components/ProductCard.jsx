import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h3>brand: {product.brand}</h3>
      <p>price: {product.price}</p>
      <p>category: {product.gender}</p>
      <p>description: {product.description}</p>
    </div>
  )
}

export default ProductCard