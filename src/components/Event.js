import React from 'react'
import { IoCheckmark } from "react-icons/io5";

// import {faCheck} from '@fortawesome/fontawesome-svg-core'
import './event.css'

const Event = () => {
  return (
    <>
    <div className='cont' >
    <div className='box-typee' >
      <div className='event-box'>
        <h3>Free</h3>
        <h4>So you can see how incredible our tool is</h4>
        <h5>$0 <span style={{fontSize:20, fontWeight:100}}>/mo</span></h5>
        <button className='btn3'>Get started</button>
        
        <p>No credit card needed</p>
      </div>
      <div className='event-mid'>
       <p>What's included:</p>
       <ul>
        <li>
        <IoCheckmark  size={30} />
         A cool feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A basic feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature with limitations
        </li>
        <li>
        <IoCheckmark size={30}/>
        An incredible feature so useful
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature

        </li>
       </ul>
     
     </div>
     </div>
 
     <div className='box-typee' >
      <div className='event-box'>
        <h3>Starter</h3>
        <h4>So you can see how incredible our tool is. </h4>
        <h5>$19<span style={{fontSize:20, fontWeight:100}}>/mo</span></h5>
        <button className='btn3'>Get started</button>
        
        <p>7 days free trial no credit card needed</p>
      </div>
      <div className='event-mid'>
       <p>All Free features, plus:</p>
       <ul>
        <li>
        <IoCheckmark  size={30} />
         A cool feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A basic feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature with limitations
        </li>
        <li>
        <IoCheckmark size={30}/>
        An incredible feature so useful
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature

        </li>
       </ul>
     
     </div>
     </div>
     <div className='box-typee' >
      <div className='event-box'>
        <h3>Starter</h3>
        <h4>So you can see how incredible our tool is. </h4>
        <h5>$49<span style={{fontSize:20, fontWeight:100}}>/mo</span></h5>
        <button className='btn3'>Get started</button>
        
        <p>7 days free trial no credit card needed</p>
      </div>
      <div className='event-mid'>
       <p>All Free features, plus:</p>
       <ul>
        <li>
        <IoCheckmark  size={30} />
         A cool feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A basic feature
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature with limitations
        </li>
        <li>
        <IoCheckmark size={30}/>
        An incredible feature so useful
        </li>
        <li>
        <IoCheckmark size={30}/>
        A top feature

        </li>
       </ul>
     
     </div>
     </div>
 
     
    
    </div>
    <div className='text-box'>
        <span>Relevant stuff, bla bla 📣</span>
        <p>Ready to start?

</p>
      </div>
      </>
  )
}

export default Event
