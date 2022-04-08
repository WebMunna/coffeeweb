import React from 'react'

import image1 from '../image/blog-1.jpeg';
import image2 from '../image/blog-2.jpeg';
import image3 from '../image/blog-3.jpeg';
import Btn from './Btn';

const BlogBox = ({pic}) => {

    let teaPic
    if(pic === "1") {
        teaPic = image1
    } else if (pic === "2"){
        teaPic = image2
    } else if (pic === "3"){
        teaPic = image3
    }
  return (
    <div className='blog-box'>
      <img src={teaPic} alt="blogimg"/>
      <div className='blog-texes'>
      <h3>Testy And Refrashing Coffee</h3>
      <h4><span className='blog-span'>By Admin / 21st March, 2022</span></h4>
      <p>tempor incididunt ut labore et dolore magna aliqua Lorem</p>
       <Btn title={"Read More"}/>
       </div>
    </div>

    
  )
}

export default BlogBox