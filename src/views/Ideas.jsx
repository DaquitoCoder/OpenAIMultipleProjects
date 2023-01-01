import React from 'react';
import { useState, useEffect } from 'react';
import IdeaList from '../components/IdeaList';
import Loading from '../components/Loading';

function Ideas() {
  const [idea, setIdea] = useState();
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URI;
  const fetchIdea = async () => {
    const response = await fetch(`${apiUrl}/critic/`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    setIdea(response);
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: '{"prompt": "' + document.getElementById('idea-search')?.value + '"}',
  };

  const searchIdea = () => {
    try {
      setSearching(true);
      fetchIdea();
      setLoading(false);
      setSearching(false);
    } catch (error) {
      console.log(error);
    }
  };

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
            id='idea-search'
          />
          <button
            className='btn btn-primary'
            type='button'
            id='button-search-idea'
            onClick={() => {
              searchIdea();
            }}
          >
            Search
          </button>
        </div>
      </div>
      {searching && loading ? <Loading /> : null}
      {idea ? <IdeaList results={idea} /> : null}
    </div>
  );
}

export default Ideas;
