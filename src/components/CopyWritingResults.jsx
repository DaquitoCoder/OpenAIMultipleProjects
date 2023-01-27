import React from 'react';

function CopyWritingResults({ body }) {
  const copyText = body?.copy_text.split('\n');
  console.log(copyText);
  return (
    <div className='copywriting-results'>
      <h1 className='copywriting-results-title'>Copywriting Results</h1>
      <h2 className='copywriting-results-title'>{copyText[0]}</h2>
      <p className='copywriting-results-text'>{copyText[2]}</p>
    </div>
  );
}

export default CopyWritingResults;
