import React, { useState } from 'react';
import Header from '../components/Header';

const Expedition = ({ expedition }) => {
  return (
    <>
      <Header/>
      <div className="flex justify-between items-center p-4 rounded-lg shadow-md " style={{ backgroundImage: `url(${expedition.image})` }}>
        <div className="text-white">
          <h2 className="text-xl font-bold">{expedition.title}</h2>
          <p>{expedition.creator}</p>
          <p>{expedition.date}</p>
          <p>{`${expedition.participants} / ${expedition.maxParticipants} people joined`}</p>
        </div>
        
      </div>
    </>
  );
};

export default Expedition;
