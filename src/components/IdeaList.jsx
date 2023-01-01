import React from 'react';

function IdeaList({ results }) {
  return (
    <div className={'idea-list'}>
      <div className='idea-pros subtitle'>
        Advantages: <p className='idea-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id placeat vitae neque quis aperiam perspiciatis molestiae aut minima at nulla!</p>
      </div>
      <div className='idea-cons subtitle'>
        Disadvantages: <p className='idea-text'></p>
      </div>
      <div className='idea-state-of-art subtitle'>
        State of the art: <p className='idea-text'></p>
      </div>
      <div className='idea-pitch subtitle'>
        Pitch: <p className='idea-text'></p>
      </div>
      <div className='idea-plan subtitle'>
        Plan:
        <p className='idea-text'></p>
      </div>
      <div className='idea-survey subtitle'>
        Questions about the idea:
        <p className='idea-text'></p>
      </div>
      <div className='idea-viability subtitle'>
        Viability
        <p className='idea-bar'></p>
      </div>
      <div className='idea-innovation subtitle'>
        innovation
        <p className='idea-bar'></p>
      </div>
      <div className='idea-resources subtitle'>
        Resources
        <p className='idea-bar'></p>
      </div>
    </div>
  );
}

export default IdeaList;
