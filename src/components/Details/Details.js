import React from "react";
import './Details.css';

export function Details({info}) { 
  return (
    <div className="details">
      <img src={`${info.avatar}?${Math.random()}`} alt='...' />
        <div className="container">
          <h3 className="element">{info.name}</h3>
          <p className="element">City: {info.details.city}</p>
          <p className="element">Company: {info.details.company}</p>
          <p className="element">Position: {info.details.position}</p>
        </div>
    </div>
  );
}
