import React from 'react';
import '../stylesheets/Landing.css';


const Landing = () => (
   <section className="landing">
      <div className="hero-container">
         <img className="hero-image" height="430px" width="800px" src="/assets/images/landing_images/boy_singing.jpg" alt="Boy singing" />
         <h1 className="hero-title">Turn the music up!</h1>
      </div>
      

      <section className="selling-points">
         <div className="point-1-container">
            <h2 className="point-title-1">Choose your music...</h2>
            <p className="point-description-1">...The world is full of music; <br /> WHY should you have to listen to music <br />that someone else chose?</p>
         </div>
         <div className="point-2-container">
            <h2 className="point-title-2">Unlimited, streaming, <br /> ad-free!</h2>
            <p className="point-description-2">No arbitrary limits. <br />No distractions.</p>
         </div>
         <div className="point-3-container">
            <h2 className="point-title-3">Mobile enabled...</h2>
            <p className="point-description-3">...Listen to your music on the go. <br />This streaming service is available on <br />all mobile platforms. </p>
         </div>
      </section>
   </section>
);

export default Landing;
