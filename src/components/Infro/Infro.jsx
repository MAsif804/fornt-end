import React from 'react'
import "./Infro.css";
import {studentIcon,videoIcon,bgElement2} from "../../assets";
const Infro = () => {
  return (
    <section id="infro" className='dark-gary'>
      
      <div className="wrapper">
      <div className="content-container">
          <div className="infro-content">
            <img src={studentIcon} />
            <div className="amount">23,000+</div>
            <div className="type">Student</div>
          </div>
          <div className="infro-content">
            <img src={videoIcon} />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img className="bg-Element-2" src={bgElement2}  />
      </div>
      
    </section>
  )
}

export default Infro;