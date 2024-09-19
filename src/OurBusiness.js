// OurBusiness.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './OurBusiness.css';

const businessContent = {
  automotive: "Automotive description...",
  'farm-equipment': "Farm Equipment description...",
  'it-technology': "IT & Technology description...",
  'financial-services': "Financial Services description...",
  'renewable-energy': "Renewable Energy description...",
  defense: "Defense description...",
};

const OurBusiness = () => {
  const { business } = useParams();

  return (
    <div className="our-business">
      <h2>Our Business</h2>
      <p>{businessContent[business]}</p>
    </div>
  );
};

export default OurBusiness;
