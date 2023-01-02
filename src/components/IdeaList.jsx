import React from 'react';
import Gauge from './Gauge';
import Idea from './Idea';

function IdeaList({ results }) {
  const pros = results.pros.split('\n').filter((pro) => pro !== '');
  const cons = results.cons.split('\n');
  const stateOfArt = results.state_of_the_art.split('\n');
  const pitch = results.pitch.split('\n');
  const plan = results.plan.split('\n');
  const survey = results.survey.split('\n');

  return (
    <div className='idea-list'>
      <Idea results={pros} idea='Advantages' />
      <Idea results={cons} idea='Disadvantages' />
      <Idea results={stateOfArt} idea='State of the art' />
      <Idea results={pitch} idea='Pitch' />
      <Idea results={plan} idea='Plan for the idea' />
      <Idea results={survey} idea='Questions about the idea' />
      <div className='row'>
        <div className='col-4'>
          <div className='idea-viability subtitle chart'>
            Viability
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={results?.viability} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-innovation subtitle chart'>
            Innovation
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={results?.innovation} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-resources subtitle chart'>
            Resources
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={results?.resources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaList;
