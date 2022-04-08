import React from 'react'
import CustomerBox from './CustomerBox'

const Customer = () => {
  return (
    <div className='customer'>
        <h1 className='customer-title'> <span className='customer-span'>CUSTOMER</span> REVIEW </h1>
       <div className='customer-boxes'>
        <CustomerBox pic={"1"}/>
        <CustomerBox pic={"2"}/>
        <CustomerBox pic={"3"}/>
       </div>
    </div>
  )
}

export default Customer