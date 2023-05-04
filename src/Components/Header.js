import React, { Component } from 'react'
export class Header extends Component {
  render() {
    return (
      <div>
         <style>
          {`
            .banner-image {
              max-width: 97%;
              border-radius: 20px;
            }

            .text-welcome{
              color:white;
              font-size: 30px;
              font-weight:bold;
            }
            .text-community{
              color:orchid;
             
              
            }
          `}
        </style>
        <img src="./images/banner.png" className="banner-image" alt="Banner" />

        <br/>
        <br/>  
        <br/>
      
        <div div className='text-welcome'><h5>Welcome To The Universe Of Data So Called Data-Verse!<br/></h5></div>
      
        
        
        
        <div className='text-community'>A Community Where We Learn, 
        Create, Innovate To Counter Real Life Problems Using Concepts Of Data Science And Other Computer Science Disiplines.</div>
        <br/>
        <br/>
       
       
      </div>
    )
  }
}

export default Header
