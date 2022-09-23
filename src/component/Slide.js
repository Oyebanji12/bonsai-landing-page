import React from 'react'
import info from "./data.js"
import "./slide.css"
import { useState } from 'react'
import {BsDot} from "react-icons/bs"


const Slide = () => {
    
    const [index, setIndex]= useState (0)
    const {name, job, image, text}= info [index]
   
    console.log(info)

    const infoLength= info.length
    const lastIndex= infoLength - 1;

    console.log(infoLength)
    console.log(lastIndex)

    const right=()=>{
     if(index === lastIndex){
        setIndex(0)
     } else{
        setIndex(index + 1)
     }
     console.log(index)

    }
    const left=()=>{
    if(index === 0){
        setIndex(lastIndex)
    } else{
        setIndex(index - 1)
    }
    console.log(index)

    }
  return (
    <div>
        <div className='con-1'>
        
            <p className='pbuy-1'>don't just take it from us</p>
        <div className='container-1'>
            <div className='img-container'>
            <img src={image} alt=""  className='img'/>
            </div>
            
            <p className='pbuy-2'>{text}</p>
            <div className='pbuy'>{name}</div>
            <div className='pbuy'>{job}</div>
            
        
        
         <div className="wrap-btn">
            <button onClick={left} className="btn-btn"></button>
            <button onClick={right} className="btn-btn"></button> 
        </div> 
        </div>
        
</div>
    </div>
  )
}

export default Slide