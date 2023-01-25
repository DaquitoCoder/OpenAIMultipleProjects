import React from 'react';

function Idea({ results, idea }) {
  return (
    <div className={'ideas-' + idea}>
      <p className='subtitle'>{idea}:</p>
      <div className='idea-text m-3'>
        {results.map((res, index) => (
          <p className='mb-3' key={index}>
            {res}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Idea;
