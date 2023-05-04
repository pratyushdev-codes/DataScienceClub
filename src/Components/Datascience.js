import React, { Component } from 'react'

export class Datascience extends Component {
  render() {
    return (
      <div>
        <style>
          {`
            .data-image {
              max-width: 80%;
              border-radius: 50px;
              height:auto;
            }
            .btn-dark {
              color: white;
              border-radius: 35px;
              width: 80%;
            }
            
            /* Responsive styles */
            @media (max-width: 768px) {
              .data-image {
                max-width: 100%;
              }
              .btn-dark {
                width: 100%;
              }
            }
          `}
        </style>
        <h1>Importance of Data Science</h1><br/>
        Data science is the field that involves analyzing and interpreting data to gain insights into various industries and domains.<br/> It is a crucial discipline that impacts almost every aspect of our lives, from business to healthcare and entertainment.<br/><br/>
        <img src="./images/datascience.jpg" className="data-image" alt="Banner" /><br/><br/>
       
        <button type="button" className="btn btn-dark" data-mdb-ripple-color="dark">By using advanced analytics tools and techniques, data scientists can identify trends, predict future outcomes, and discover new opportunities for growth and innovation. In the future, data science is expected to play an even more significant role in shaping the world around us, especially with the rise of IoT and the abundance of data. As the volume of data continues to grow, data scientists will play a critical role in mining this data and gaining valuable insights into various domains. With the rise of artificial intelligence and machine learning, data science is expected to be at the forefront of innovation in these fields.</button>
      </div>
    )
  }
}

export default Datascience
