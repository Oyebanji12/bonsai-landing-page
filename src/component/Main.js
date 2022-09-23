import React from 'react'
import {GoNote} from "react-icons/go"
import {FaFileInvoiceDollar,FaWpforms} from "react-icons/fa"
import {BiTask} from "react-icons/bi"
import {TbReceiptTax} from "react-icons/tb"
import {BsChevronRight,BsArrowRight,BsClipboardPlus,BsBook,BsClock} from "react-icons/bs"
import image from "./6050acdd031b9f58db100f72_Graphic_Proposal-opt.png"
import img1 from "./5e5fd7c602ca7ca8ebfeb662_ill_Built for_4 block.svg"
import img2 from "./5e5fd7c602ca7c967efeb661_ill_Global Support_4 block.svg"
import "./main.css"

const Main = () => {
  return (
    <div>
        {/* part 1 */}
        <div className='cap'>
        <div className='main-container'>
            <div className='one'> 
                <div className='con'><GoNote className='icon' /> <span>Proposal</span> <BsChevronRight className='icon' />  </div> 

                <div className='con-2'><BsBook className='icon' /><span>Contract</span><BsChevronRight className='icon' /> </div> 

                <div className='con-3'><BsClipboardPlus className='icon' /><span>Client </span><BsChevronRight className='icon' /> </div> 
                
                <div className='con-4'><FaWpforms className='icon' /><span>Form</span><BsChevronRight className='icon' /> </div>  
             </div> 
            <div className='two'>
                <div className='text-1'>win more work</div>
                <div className='text-2'>With just a few clicks, you can craft structured proposals with clear  <br /> estimates to close your deals faster.</div>
                <a href="" className='text-3'>Explore proposal <BsArrowRight /></a>
                
                     <img src={image} alt="" className='image' />   
            </div>  
        </div>
    </div>
{/* part 2 */}
    <div className='wrapper'>
        <div className='above'>Trusted by 500K+ self-employed workers <br />
and small businesses</div>
<div className='below'><p>Whether you’re just getting started or your business is <br /> booming, Bonsai has you covered.</p></div>
    </div>
    {/* part 3 */}
    <div className='wrapper-1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
    </div>
    <div className='wrapper-2'>
        <div>Built for All Work Types </div>
        
        <div>Built for Global Businesses </div>
       
    </div>
    <div className='wrapper-3'>
        <div>We proudly back people with  wide-ranging <br />  businesses—from design and <br /> marketing to development, writing, and <br /> photography.</div>
        <div>Bonsai has international coverage across <br /> the United States, Canada, UK, <br /> Australia and more, with 180 currencies  <br /> supported.</div>
    </div>

    </div>
  )
}

export default Main