import React from 'react'
import Btn from './Btn'

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='contact-title'> <span className='contact-span'>CONTACT</span> US </h1>
    
    <div className='contact-element'>
        <div className='map'></div>
        <div className='contact-form'>
            <form>
                <h2 className='form-title'>GET IN TOUCH</h2>
                <input type="text" placeholder='    name'/>
                <br/>
                <input type="text" placeholder='    email'/>
                <br/>
                <input type="text" placeholder='    number'/>
                <br/>
                <br/>
                <Btn title={"Contact Now"}/>
            </form>
            
        </div>
    </div>
    </div>
  )
}

export default Contact