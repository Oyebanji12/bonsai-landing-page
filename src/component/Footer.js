import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <div className='container'>
            <div className='side-1'>It’s <span className='sp'>your</span>  business. <br /> We’re here to help it grow.</div>
             <button className='btn'>start here</button>
        </div>

        <div className='footer'>
             <div className=''> 
                <div className='sub'>PRODUCT</div>
                <h5>Proposals</h5>
                <h5>Contracts</h5>
                <h5>Invoicing</h5>
                <h5>Client CRM</h5>
                <h5>Time Tracking</h5>
                <h5>Task Tracking</h5>
                <h5>Forms</h5>
                <h5>Accounting</h5>
                <h5>Bonsai Cash</h5>
                <h5>Pricing</h5>
                <h5>Review</h5>
             </div> 
            

            <div className=''>
                <div className='sub'>FREE RESOURCES</div>
                <h5>Freelance Resources</h5>
                <h5>Freelance Blog by Bonsai</h5>
                <h5>How to Write a Contract</h5>
                <h5>Online Signature Maker</h5>
                <h5>Self-Employed Taxes Hub</h5>
                <h5>Self-Employed Tax Calculator</h5>
                <h5>Estimate Templates</h5>
                <h5>Invoice Templates</h5>
                <h5>Comparisons</h5>
                <h5>Write for Us</h5>
                <h5>Affiliates</h5>
            </div>

             <div className=''>
                <div className='sub'>BONSAI</div>
                <h5>About</h5>
                <h5>Careers</h5>
                <h5>Support</h5>
                <h5>LinkedIn</h5>
                <h5>Twitter</h5>
                <h5>Privacy policy</h5>
                <h5>Legal</h5>
                <h5>Affiliates</h5>
            </div>
                
            

        </div>

    </div>
  )
}

export default Footer