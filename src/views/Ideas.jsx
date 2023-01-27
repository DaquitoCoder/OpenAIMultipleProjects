import { useState } from 'react';
import { critic } from '../js/api';
import IdeaList from '../components/IdeaList';
import AboutTool from '../components/AboutTool';
import { LoadingData } from '../js/ModellingData';

function Ideas() {
  const [idea, setIdea] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await critic(idea);
    setResults(response);
    setLoading(false);
  };

  let resultsSection = LoadingData(loading, results, IdeaList);

  return (
    <div className='ideas gap-3'>
      <AboutTool
        title={'Ideas Consultant'}
        text={
          'This tool helps entrepreneurs and business owners analyze their product or service idea. It provides a comprehensive evaluation that includes pros and cons, state of the art, a pitch, a plan, survey questions, and viability, innovation, and resource indicators. \nThis information allows entrepreneurs to make informed decisions about whether to move forward with their idea or to make adjustments before investing time and resources. Overall, a business idea evaluation tool is a valuable tool for anyone looking to start a new business or launch a new product or service.'
        }
      />
      <div className='ideas-search mb-3 p-3'>
        <div className='idea-searchbar'>
          <form onSubmit={handleSubmit} className='form-search'>
            <div className='input-group'>
              <input
                autoComplete='off'
                type='text'
                className='form-control'
                placeholder="What's your idea?"
                aria-label="What's your idea?"
                aria-describedby='button-addon2'
                id='idea-search'
                onChange={(e) => setIdea(e.target.value)}
                autoFocus={true}
                required={true}
              />
              <button
                className='btn btn-success'
                type='submit'
                id='button-search-idea'
              >
                Search idea
              </button>
            </div>
          </form>
        </div>
      </div>
      {resultsSection}
    </div>
  );
}

export default Ideas;
