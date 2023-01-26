import { useState } from 'react';
import { critic } from '../js/api';
import IdeaList from '../components/IdeaList';
import Loading from '../components/utils/Loading';
import Error from '../components/utils/Error';

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

  let resultsSection = '';
  if (loading) {
    resultsSection = <Loading />;
  } else if (results?.status === 404) {
    resultsSection = <Error message={results?.body.detail} />;
  } else if (results?.status === 200) {
    resultsSection = <IdeaList ideas={results?.body} />;
  }

  return (
    <div className='ideas'>
      <div className='ideas-search mb-3 p-3'>
        <h1 className='ideas-title'>Ideas Consultant</h1>
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
