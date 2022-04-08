import React from 'react'
import ProductBox from './ProductBox'

const Product = () => {
  return (
    <div className='product'>
         <h1 className='product-title'> <span className='product-span'>OUR</span> PRODUCTS </h1>
       <div className='product-boxes'>
       <ProductBox pic={"1"}/>
       <ProductBox pic={"2"}/>
       <ProductBox pic={"3"}/>
       </div>
    </div>
  )
}

export default Product