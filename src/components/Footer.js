import React from 'react';

export const Footer = ({cost})=>{
  return (
      <div className="footer">
          <div className="footer-text">
                Your fare will cost
          </div>
          <div className="fare-cost">
                ${cost}
          </div>
      </div>
  )
}