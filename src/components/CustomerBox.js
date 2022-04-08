import React from 'react';
import image1 from '../image/pic-1.png';
import image2 from '../image/pic-2.png';
import image3 from '../image/pic-3.png';

const CustomerBox = ({pic}) => {

    let teaPic
    if(pic === "1") {
        teaPic = image1
    } else if (pic === "2"){
        teaPic = image2
    } else if (pic === "3"){
        teaPic = image3
    }

  return (
    <div className='customer-box'>
        <div className='shapes'>
            <div className='shape1'></div>
            <div className='shape2'></div>
        </div>
        <div className='creview'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit 
            tempor incididunt ut labore </p>
        </div>
        <img src={teaPic} alt="pcustomer"/>
        <div className='customer-name'><h3>John Doe</h3></div>
    </div>
  )
}

export default CustomerBox