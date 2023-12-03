import React from 'react'
import calendar from './image/calendar.png'
import './discover.css'
import image from './image/discoverImage.png'
const Discover = () => {
  return (
    <>
    <div className='container'>
      <div className='text-box'>
        <span>Our main features 🦸🏼</span>
        <p>Discover your new superpowers</p>
      </div>
      <div className='box'>
      <div className='box-text'><span>Seamless Scheduling</span>
       <h2>Focus on what matters most for you</h2>
       <p>Effortlessly plan your day with our intuitive drag-and-<br/>drop interface. Sync with multiple calendar platforms,<br/>
        import events from emails, and add participants with just <br/> a few clicks.</p>
       <p style={{marginTop:70 ,height:20}}>
       <img src={image} className='discover-image'  style={{float:'left'}}/>
       <p className='p' style={{backgroundColor:'black', fontWeight:800, 
  
           color: 'white'}}> I tested many calendar apps. This app is the best of all! It saves me hours of time.<br></br>
           <sopan style={{color: '#90909E'}}>Carla, Head of Finance </sopan>
          </p> 

       </p> 
        
        </div>
       <div>
        <img className='image' src={calendar}/>
       </div>
      </div>

    </div>



    <div className='container'>
      
      <div className='box'>
      
       <div>
        <img className='image12' src={calendar}/>
       </div>
       <div className='box-text1'><span>Seamless Scheduling</span>
       <h2>Focus on what matters most for you</h2>
       <p>Effortlessly plan your day with our intuitive drag-and-<br/>drop interface. Sync with multiple calendar platforms,<br/>
        import events from emails, and add participants with just <br/> a few clicks.</p>
       <p style={{marginTop:70}}>
       <img src={image} className='discover-image1'  style={{float:'right'}}/>
       <p className='para' style={{backgroundColor:'black', fontWeight:600, 
  
           color: 'white'}}> I tested many calendar apps. This app is the best of all! It saves me hours of time.<br></br>
           <sopan style={{color: '#90909E'}}>Carla, Head of Finance </sopan>
</p> 

       </p> 
        
        </div>
      </div>

    </div>

    <div className='container'>
      
      <div className='box'>
      <div className='box-text'><span>Seamless Scheduling</span>
       <h2>Focus on what matters most for you</h2>
       <p>Effortlessly plan your day with our intuitive drag-and-<br/>drop interface. Sync with multiple calendar platforms,<br/>
        import events from emails, and add participants with just <br/> a few clicks.</p>
       <p style={{marginTop:70}}>
       <img src={image} className='discover-image'  style={{float:'left'}}/>
       <p className='p' style={{backgroundColor:'black', fontWeight:600, 
  
           color: 'white'}}> I tested many calendar apps. This app is the best of all! It saves me hours of time.<br></br>
           <sopan style={{color: '#90909E'}}>Carla, Head of Finance </sopan>
</p> 

       </p> 
        
        </div>
       <div>
        <img className='image' src={calendar}/>
       </div>
      </div>

    </div>


    <div className='container'>
      
      <div className='box'>
      
       <div>
        <img className='image12' src={calendar}/>
       </div>
       <div className='box-text1'><span>Seamless Scheduling</span>
       <h2>Focus on what matters most for you</h2>
       <p>Effortlessly plan your day with our intuitive drag-and-<br/>drop interface. Sync with multiple calendar platforms,<br/>
        import events from emails, and add participants with just <br/> a few clicks.</p>
       <p style={{marginTop:70}}>
       <img src={image} className='discover-image1'  style={{float:'right'}}/>
       <p className='para' style={{backgroundColor:'black', fontWeight:600, 
  
           color: 'white'}}> I tested many calendar apps. This app is the best of all! It saves me hours of time.<br></br>
           <sopan style={{color: '#90909E'}}>Carla, Head of Finance </sopan>
</p> 

       </p> 
        
        </div>
      </div>

    </div>
</>
  )
}

export default Discover
