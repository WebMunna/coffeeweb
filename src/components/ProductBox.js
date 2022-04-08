import React from 'react'
import image1 from '../image/product-1.png';
import image2 from '../image/product-2.png';
import image3 from '../image/product-3.png';


const ProductBox = ({pic}) => {

    let teaPic
if(pic === "1") {
    teaPic = image1
} else if (pic === "2"){
    teaPic = image2
} else if (pic === "3"){
    teaPic = image3
}
  return (
    <div className='product-box'>
    <div className='three-line'><h2>|||</h2></div>
<div className='product-image'>
        <img src={teaPic} alt="tea"/>
        </div>
        <div className='product-text'>
           <h3>Fresh Coffee</h3>
           <h4>$15.99 <span className='discount'><h5><del>20.99</del></h5></span></h4>
           
        </div>
    </div>
  )
}

export default ProductBox