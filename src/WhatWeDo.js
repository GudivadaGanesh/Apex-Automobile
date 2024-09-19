// WhatWeDo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const navigate = useNavigate();

  const handleCardClick = (business) => {
    navigate(`/our-business#${business}`);
  };

  return (
    <div className="what-we-do">
      <h2>What We Do</h2>
      <div className="card-container">
        {['Automotive', 'Farm Equipment', 'IT & Technology', 'Financial Services', 'Renewable Energy', 'Defense'].map((item) => (
          <div className="card" key={item} onClick={() => handleCardClick(item.toLowerCase())}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
