import React from 'react';
import Gauge from './Gauge';
import Idea from './Idea';

function IdeaList({ ideas }) {
  const pros = ideas?.pros?.split('\n').filter((pro) => pro !== '');
  const cons = ideas?.cons?.split('\n');
  const stateOfArt = ideas?.state_of_the_art?.split('\n');
  const pitch = ideas?.pitch?.split('\n');
  const plan = ideas?.plan?.split('\n');
  const survey = ideas?.survey?.split('\n');

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
    }
  ]

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
              <Gauge id='gauge-chart1' value={ideas?.viability} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-innovation subtitle chart'>
            Innovation
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={ideas?.innovation} />
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='idea-resources subtitle chart'>
            Resources
            <div className='idea-bar'>
              <Gauge id='gauge-chart1' value={ideas?.resources} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaList;
