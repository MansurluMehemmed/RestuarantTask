import React from 'react';

const Rating  = ({ rating, totalStars = 5 }) => {
  // 100% = 5 ulduz, nisbət olaraq doldurmanı faizlə veririk
  const starPercentage = (rating / totalStars) * 100;

  return (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block', 
      fontSize: '30px', 
      color: '#ccc', /* boz ulduzlar */
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1,
      userSelect: 'none'
    }}>
      {/* Boz ulduzlar */}
      {'★★★★★'}
      
      {/* Sarı ulduzlar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: `${starPercentage}%`,
        color: '#f5b301', /* sarı ulduzlar */
      }}>
        {'★★★★★'}
      </div>
    </div>
  );
};

export default Rating ;
