import React from 'react'
import image1 from '../image/menu-1.png';
import image2 from '../image/menu-2.png';
import image3 from '../image/menu-3.png';
import image4 from '../image/menu-4.png';
import image5 from '../image/menu-5.png';
import image6 from '../image/menu-6.png';
import Btn from './Btn';

const MenuBox = ({pic}) => {

let teaPic
if(pic === "1") {
    teaPic = image1
} else if (pic === "2"){
    teaPic = image2
} else if (pic === "3"){
    teaPic = image3
} else if (pic === "4"){
    teaPic = image4
} else if (pic === "5"){
    teaPic = image5
} else if (pic === "6"){
    teaPic = image6
}

  return (
    <div className='menu-box'>
        <div className='menu-image'>
        <img src={teaPic} alt="tea"/>
        </div>
        <div className='tea-text'>
           <h3>Testy And Healty</h3>
           <h4>$15.99 <span className='discount'><h5><del>20.99 </del></h5></span></h4>
           <Btn title={"Add To Cart"}/>
        </div>
        
    </div>
  )
}

export default MenuBox