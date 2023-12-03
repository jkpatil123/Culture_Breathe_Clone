import React from "react";
import "./card.css";
import Img from './assets/images/cardicon.png'

const data = [
    {
      "id":1,
      "src":'./assets/images/cardicon.png',
      "button": "Get Started",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    {
      
      "id":2,
      "src":'./assets/images/cardIcon2.png',
      "button": "Cross-Device Sync",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    {
      
      "id":3,
      "src":'./assets/images/cardIcon3.png',
      "button": "Cross-Device Sync",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    {
      
      "id":4,
      "src":'./assets/images/cardIcon4.png',
      "button": "Cross-Device Sync",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    {
      
      "id":4,
      "src":'./assets/images/cardIcon5.png',
      "button": "Cross-Device Sync",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    {
      
      "id":4,
      "src":'./assets/images/cardIcon6.png',
      "button": "Cross-Device Sync",
      "info": "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go",
    },
    // {
      
    //   src:<Img/>,
    //   button: "Cross-Device Sync",
    //   info: "Keep your schedule in sync across all your $<br/> devices, ensuring seamless access to your $(<br/>) calendar, events, and tasks wherever you go",
    // },
    // {
      
    //   src:<Img/>,
    //   button: "Cross-Device Sync",
    //   info: "Keep your schedule in sync across all your $<br/> devices, ensuring seamless access to your $(<br/>) calendar, events, and tasks wherever you go",
    // },

    
  ];
const Card = () => {

  
  return (
    <>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: 30,
        // marginTop:10
      }}
    >
      {/* <div>
        <div className="card-box">
          <img className="cardImage" src={icon} />
        </div>
        <div className="text-card">
          <span>Cross-Device Sync</span>
          <p>
            Keep your schedule in sync across all your <br /> devices, ensuring
            seamless access to your
            <br /> calendar, events, and tasks wherever you go
          </p>
        </div>
      </div>
     */} 
     {data.map((item, key) =>{
        return(
          <div>
        <div  className="card-box">
        
          <img className="cardImage" src={require(`${item.src}`)} />
        </div>
        <div className="text-card" >
          <span>{item.button}</span>
          <p>
          {item.info}
           
          </p>
        </div>
        
      </div>
     
        )
     })}
    </div>
    <div className='text-box'>
        <span>And so much more... 💼</span>
        <p>Our features to make your life<br/> easier</p>
      </div>
    </>
  );
};

export default Card;
