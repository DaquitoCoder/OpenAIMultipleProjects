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

  const ideas = [
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
      {ideas.map((idea, index) => (
        <Idea key={index} idea={idea.idea} results={idea.results} />
      ))}
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
