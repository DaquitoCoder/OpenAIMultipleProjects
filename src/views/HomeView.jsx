import React from 'react';
import { Link } from 'react-router-dom';
import AboutTool from '../components/AboutTool';

function HomeView() {
  return (
    <div className='home'>
      <AboutTool title={'About this tool'} text={"This tool is a sandbox for OpenAI's GPT-3 API. It allows you to experiment with the API and see what it can do. The tool is still in development, so please be patient with us. If you have any suggestions, please let us know."} />

      <div className='sandbox-menu'>
        <div className='sandbox-menu-title'>Sandbox options</div>

        <div className='btn-group' role='group' aria-label='Actions buttons'>
          <button type='button' className='btn btn-light'>
            <Link to='/escape-game'>Escape Game</Link>
          </button>
          <button type='button' className='btn btn-light'>
            <Link to='/ideas'>Idea Consultant</Link>
          </button>
          <button type='button' className='btn btn-light'>
            <Link to='/copywriting'>Copy Writing</Link>
          </button>
          <button type='button' className='btn btn-light'>
            <Link to='/resume'>Making a resume</Link>
          </button>
          <button type='button' className='btn btn-light'>
            <Link to='/script'>Making a script</Link>
          </button>
          <button type='button' className='btn btn-light'>
            <Link to='/sentiment-analysis'>Sentiment Analysis</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
