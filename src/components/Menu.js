import React from 'react'
import MenuBox from './MenuBox'

const Menu = () => {
  return (
    <div className='menu'>
       <h1 className='menu-title'> <span className='menu-span'>OUR</span> MENU </h1>
       <div className='menu-boxes'>
           <MenuBox pic={"1"}/>
           <MenuBox pic={"2"}/>
           <MenuBox pic={"3"}/>
           <MenuBox pic={"4"}/>
           <MenuBox pic={"5"}/>
           <MenuBox pic={"6"}/>
       </div>
    </div>
  )
}

export default Menu