import React from 'react'
import logo from '../image/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
             <img src={logo} alt="logo"/>
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
    </div>
  )
}

export default Header