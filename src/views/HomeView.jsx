import React from 'react';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <>
      <div className='home'>
        <div className='sandbox-title'>Sandbox options</div>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button type='button' className='btn btn-primary'>
            <Link to='/escape-game'>Escape Game</Link>
          </button>
          <button type='button' className='btn btn-primary'>
            <Link to='/ideas'>Idea Consultant</Link>
          </button>
          <button type='button' className='btn btn-primary'>
            <Link to='/copy-writing'>Copy Writing</Link>
          </button>
          <button type='button' className='btn btn-primary'>
            <Link to='/resume'>Making a resume</Link>
          </button>
          <button type='button' className='btn btn-primary'>
            <Link to='/sentiment-analysis'>Sentiment Analysis</Link>
          </button>
        </div>

        <div className='sandbox-about'>About this tool</div>
        <div className='sandbox-about-text'>
          This tool is a sandbox for OpenAI's GPT-3 API. It allows you to
          experiment with the API and see what it can do. The tool is still in
          development, so please be patient with us. If you have any
          suggestions, please let us know.
        </div>
      </div>
    </>
  );
}

export default HomeView;