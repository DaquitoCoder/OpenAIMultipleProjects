import React from 'react';
import Gauge from './Gauge';
import Idea from './Idea';

function IdeaList({ body }) {
  const pros = body?.pros?.split('\n').filter((pro) => pro !== '');
  const cons = body?.cons?.split('\n');
  const stateOfArt = body?.state_of_the_art?.split('\n');
  const pitch = body?.pitch?.split('\n');
  const plan = body?.plan?.split('\n');
  const survey = body?.survey?.split('\n');

  const ideasMap = [
    {
      idea: 'Advantages',
      results: pros,
    },
    {
      idea: 'Disadvantages',
      results: cons,
    },
    {
      idea: 'State of the art',
      results: stateOfArt,
    },
    {
      idea: 'Pitch',
      results: pitch,
    },
    {
      idea: 'Plan for the idea',
      results: plan,
    },
    {
      idea: 'Questions about the idea',
      results: survey,
    },
  ];

  return (
    <div className='idea-list'>
      {ideasMap.map((idea, index) => (
        <Idea key={index} idea={idea.idea} results={idea.results} />
      ))}
      <div className='row'>
        <div className='col-4'>
          <div className='idea-viability subtitle chart'>
            Viability
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={body?.viability} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-innovation subtitle chart'>
            Innovation
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={body?.innovation} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-resources subtitle chart'>
            Resources
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={body?.resources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaList;
