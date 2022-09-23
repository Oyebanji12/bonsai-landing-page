import React from 'react'
import heroImage from "./60dc499268d597166db997aa_bonsai_hero-opt-2.png"
import beforeImage from "./5e5fd7c602ca7c6c51feb665_ill_before_2n block.svg"
import afterImage from "./5e5fd7c602ca7c9ed8feb675_ill_after_2nd block.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div>
        <div className='hero-container'>
            <div className='left-side'>
                <h3>
                Everything you need to run your business.
                
                </h3>
                <p><h4>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</h4></p>
                <input type="text" placeholder='enter your mail' className='text-field' /> 
            </div>
            <div className='right-side'>
            <img src={heroImage} alt="" className='img-hero' />
            </div>
        </div>

        <div className='text-wrapper'>
            <h4 className='text-1'>Make more, manage less</h4>
            <p><h4 className='text-2'>Bonsai integrates and automates every step of your business so it <br /> runs seamlessly - from proposal to tax season.</h4></p>
        </div>

       <div className='image-text'>
        <span>with bonsai</span>
        <span>without bonsai</span>
       </div>

        <div className='image-container'>

                <img src={afterImage} alt="" className='afterimage' />
                
                <img src={beforeImage} alt="" className='beforeimage' />
            
        </div>


    </div>
  )
}

export default Hero