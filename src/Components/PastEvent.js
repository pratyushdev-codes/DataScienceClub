import React, { Component } from 'react';
export class PastEvent extends Component {
  render() {
    return (
      <div className="text-center">
        <div><h5>Past Events</h5><br/>       
        <div className="d-flex justify-content-center">
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src='./images/datalize.jpeg'
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover', borderRadius:'15px'}}/>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Datalize</h5>
              <p className="card-text">
              No large, global, heterogeneous, multi-business- and product-line enterprise can ever hope to clean up all of its data — it’s always a continuous journey. The key is knowing what data sources feed your applications and how confident you are about the accuracy of data coming from each source."Be ready to be a part of one of the most exciting and insightful events DATALIZE to be conducted by the Data Science Club. As it is rightly said, The best way to learn data science is to do data science.</p>             
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src="./images/dsadash.jpeg"
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover' , borderRadius:'15px'}}/>            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">DSA Dash</h5>
              <p className="card-text">
              A platform to unleash your inquisitive intellect. A conspicuous event you cannot miss to be a part of!!The “Data Science Club” is gratified to welcome you all in the colossal “DSA Contest".Winners will be facilitated with amazing prizes. Participation certificate will be provided to all! Don’t blow the chance and play a part! Do join us.</p>              
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          <div className="card mx-3" style={{ width: '27rem' , background:'black', color:'white',borderRadius:'15px',border: '1px solid grey'}}>
            <img
              src="./images/mlsprint.jpeg"
              className="card-img-top"
              alt="..."
              style={{ height: '250px', objectFit: 'cover', borderRadius:'15px' }}/>            
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">ML Sprint</h5>
              <p className="card-text">
              TA platform to unleash your methodological intellect, A conspicuous event you cannot miss to be part of!! The “Data Science Club”of VIT Bhopal is gratified to welcome you all in the colossal “ ML-SPRINT HACKATHON ” under Annual Tech Fest AdVITya 2022. Do join us and get an opportunity to be a part of indifferent minds . Be the part and reap the guerdon.</p>            
              <a href="#" class="btn btn-dark mt-auto mx-auto">Read more</a>
            </div>
          </div>
          </div>
   </div>
   </div>   
    );
  }
}
export default PastEvent;
