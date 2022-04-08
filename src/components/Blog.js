import React from 'react'
import BlogBox from './BlogBox'

const Blog = () => {
  return (
    <div className='blog'>
        <h1 className='blog-title'> <span className='blog-span'>OUR</span> BLOGS </h1>
       <div className='blog-boxes'>
          <BlogBox pic={"1"}/>
          <BlogBox pic={"2"}/>
          <BlogBox pic={"3"}/>
       </div>
    </div>
  )
}

export default Blog