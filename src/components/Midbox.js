import React ,{useState}from 'react'
import icon from './image/image1.png'
import icon2 from './image/image2.png'
import icon3 from './image/image4.png'
import icon4 from './image/image5.png'
import icon5 from './image/image6.png'
import './midTop.css'
import setImage from './image/set.png'
const Midbox = () => {
    const [over, setOver] = useState(false);
    const [hover, setHover] = useState(false);
    const [image, setimage] = useState(false);
    const [select, setSelect] = useState(false);
    const [mouse, setMouse] = useState(false);



  return (
<div className='midTop'>
    <ul> 
    <li><span>An other way to manage timgdfe️</span></li>
    <li><p>Your new favorite<br></br>calendar 🗓️ app</p></li>
    <li><h2>Here you should explain how cool your app is. Remember,<br/> focus on the benefits for your users, not on the features. </h2></li>
    <li><button className="btn">Get started, It's free</button></li>
    <li><h3>Free 14 days trials,no credit card needed</h3></li> 
    </ul>
<div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'space-between'}}>
<div style={{display:'flex', flexDirection:'row'}} >
<div 
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
>
         <img 
          src={over ? setImage : icon}
          alt="arrow"
          width={40}
        />
      
    </div> 

    <div
      style={{marginLeft:-16, border:1 , }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
         
        <img 
         src={hover ? setImage :icon4}
          alt="arrow"
          width={40}
           />

    </div> 
   
  

    <div
      style={{marginLeft:-16}}
      onMouseOver={() => setimage(true)}
      onMouseOut={() => setimage(false)}
    >
         
        <img 
         src={image ? setImage:icon2}
          alt="arrow"
          width={40}
           />

    </div>  
    <div
      style={{marginLeft:-15}}
      onMouseOver={() => setSelect(true)}
      onMouseOut={() => setSelect(false)}
    >
         
        <img 
         src={select ? setImage:icon5}
          alt="arrow"
          width={40}
           />

    </div>   
      
    <div
      style={{marginLeft:-17}}
      onMouseOver={() => setMouse(true)}
      onMouseOut={() => setMouse(false)}
    >
         
        <img 
         src={mouse? setImage:icon3}
          alt="arrow"
          width={40}
           />

    </div>   

</div>
     <div style={{paddingLeft:10}}>Not found</div>
    </div>
    </div>
  )
}

export default Midbox
