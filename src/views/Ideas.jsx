import React from 'react';
import { useState, useEffect } from 'react';

function Ideas() {
  return (
    <div className='ideas'>
      <h1 className='ideas-title'>Ideas Consultant</h1>
      <div className='idea-search'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder="What's your idea?"
            aria-label="What's your idea?"
            aria-describedby='button-addon2'
          />
          <button className='btn btn-primary' type='button' id='button-addon2'>
            Search
          </button>
        </div>
      </div>
      <div className='idea-list'>
        <div className='idea-pros subtitle'>
          Advantages: <p className='idea-text'></p>
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
    </div>
  );
}

export default Ideas;
