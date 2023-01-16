import React from 'react';
import { useState, useEffect } from 'react';
import IdeaList from '../components/IdeaList';
import Loading from '../components/Loading';
import { critic } from '../assets/js/api';

function Ideas() {
  const [idea, setIdea] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await critic(idea);
      setResults(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setIdea(e.target.value);
  };

  let resultsSection = '';
  if (loading) {
    resultsSection = <Loading />;
  } else if (results) {
    resultsSection = <IdeaList results={results} />;
  }

  return (
    <div className='ideas'>
      <h1 className='ideas-title'>Ideas Consultant</h1>
      <div className='idea-search'>
        <form onSubmit={handleSubmit} className='form-search'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder="What's your idea?"
              aria-label="What's your idea?"
              aria-describedby='button-addon2'
              id='idea-search'
              onChange={handleChange}
              autoFocus={true}
            />
            <button
              className='btn btn-primary'
              type='submit'
              id='button-search-idea'
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className='container-fluid container-ideas'>{resultsSection}</div>
    </div>
  );
}

export default Ideas;
