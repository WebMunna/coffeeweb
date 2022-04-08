import React from 'react'
import Btn from './Btn'

const About = () => {
  return (
    <div className='about'>
        <h1 className='about-title'> <span className='about-span'>ABOUT</span> US </h1>
        <div className='about-elements'>
            <div className='about-picture'>
           
            </div>
            <div className='about-text'>
              <div className='about-inside-text'>
                          <h1>What Makes Our Coffee Special?</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    <br/>
                    <br/>
                    
                    tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua</p>
                    <Btn title={"Learn More"}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About