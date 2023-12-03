import React from 'react'
import './footer.css'
import calendar from './image/calendar.png'
import './discover.css'
import image from './image/discoverImage.png'
const Footer = () => {
  return (
    <div >
      {/* <div className='text-box'>
        <span>Last call Baby! 🚀

        </span>
        <p>Ready to start?</p>
      </div> */}
      <div className='footer-mid'>
        <p>Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </p>
        <button className='footer-btn'>Get started</button>

        <div className='footer'>
       
       <p style={{marginTop:70 }}>
       <img src={image} className='footer-image'  style={{float:'left'}}/>
       <p className='p' style={{backgroundColor:'rgba(254, 233, 203, 1)',  
  
           color: 'rgb(46,46,46'}}> I never missed a call again, the AI- <br></br>drivenfeature is a game changer for me! <br></br>

Adam, Solo founder<br></br>
         
          </p> 

       </p> 
        
        </div>
      </div>
     <div className='footer-bottom'>
           <ul>
           <h3>Milton</h3>
         <li>A short text explaining <br></br>

why my startup is so cool</li> 
<li>© My super start-up</li>
   
   

        </ul>
        <ul>
        <h3>Products</h3>
            <li> Features</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>FAQs</li>
            
        </ul>
        <ul>
           <h3>Resources</h3>
           <li>Change log</li>
           <li>Help center</li>
           <li>Blog</li>
           <li>Contact</li>
        </ul>
        <ul>
        <h3>Others</h3>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Affiliation</li>
            <li>Press</li>
            <li>Hello</li>
        </ul>
        <ul>
        <h3>From the blog</h3>
            <li>Mastering Your Schedule: Top Time <br></br>Management Techniques for Balancing<br></br>Work and Life</li>
            <li>Organizing Your Calendar for Enhanced<br></br>Productivity and Focus</li>
            <li>The Power of Prioritization: Effective<br></br> Strategies for Managing Your Time and<br></br>Tasks</li>
            <li>Maximizing Your Minutes: Essential Tips for<br></br>Streamlining Your Daily Routine and<br></br>Calendar</li>
        
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
