import { useState } from 'react';
import { resume } from '../js/api.js';
import ResumeResults from '../components/ResumeResults.jsx';
import Loading from '../components/utils/Loading.jsx';
import Error from '../components/utils/Error.jsx';
import AboutTool from '../components/AboutTool.jsx';
import { LoadingData } from '../js/ModellingData.jsx';

function Resume() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let description = document.getElementById('textAreaDescription').value;
    setLoading(true);
    const results = await resume(description);
    setDescription(results);
    setLoading(false);
  };

  let resultsSection = LoadingData(loading, description, ResumeResults);

  return (
    <div className='resume d-flex gap-2'>
      <AboutTool
        title={'Making a resume'}
        text={
          'This tool will help you make a resume. You can use it to make a resume for yourself or for someone else. You can also use it to make a resume for a fictional character.'
        }
      />

      <div className='resume-description'>
        <div className='resume-form-title'>Enter a description</div>
        <form className='resume-form' onSubmit={handleSubmit}>
          <div className='form-floating'>
            <textarea
              // onChange={(e) => {
              //   e.preventDefault();
              //   setDescription(e.target.value)
              // }}
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
