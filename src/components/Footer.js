import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='three-line'>
            |||||
        </div>
     
        <div className='navigation'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Products</a></li>
                <li><a href='#'>Review</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Blogs</a></li>
              </ul>
        </div>
         <br/>
        <div className='owner-ship'>
            <h4>Created By <span className='blog-span'> Munna Islam Apu </span>  | All Right Reserved</h4>
        </div>
    </div>
  )
}

export default Footer