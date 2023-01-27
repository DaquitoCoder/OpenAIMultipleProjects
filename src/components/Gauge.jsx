import React from 'react';

function Gauge({ value }) {
  const style = {
    '--rotation': `${value * 18}deg`,
  };

  return (
    <div className='gauge' style={style}>
      <div className='percentage' key={1}></div>
      <div className='mask' key={2}></div>
      <span className='value' key={3}>
        {value}/10
      </span>
    </div>
  );
}

export default Gauge;
