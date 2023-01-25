import { useState } from 'react';
import { resume } from '../js/api.js';

function Resume() {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await resume(description);
    console.log(results);
  };

  let resultsSection = '';

  return (
    <div className='resume d-flex gap-2'>
      <div className='resume-about'>
        <div className='resume-about-title'>Making a resume</div>

        <p className='resume-about-text'>
          This tool will help you make a resume. You can use it to make a resume
          for yourself or for someone else. You can also use it to make a resume
          for a fictional character
        </p>
      </div>

      <div className='resume-description'>
        <div className='resume-form-title'>Enter a description</div>
        <form className='resume-form' onSubmit={handleSubmit}>
          <div className='form-floating'>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className='form-control'
              placeholder='Make a description here'
              id='textAreaDescription'
            ></textarea>
            <label className='form-label' htmlFor='textAreaDescription'>
              Description
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      {resultsSection}
    </div>
  );
}
export default Resume;
