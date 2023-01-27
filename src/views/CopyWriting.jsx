import { useState } from 'react';
import { copyWritter } from '../js/api.js';
import CopyWritingResults from '../components/CopyWritingResults.jsx';
import Loading from '../components/utils/Loading.jsx';
import Error from '../components/utils/Error.jsx';
import AboutTool from '../components/AboutTool.jsx';
import { LoadingData } from '../js/ModellingData.jsx';

function CopyWriting() {
  const [nameProduct, setNameProduct] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [description, setDescription] = useState('');
  const [keySellingPoints, setKeySellingPoints] = useState('');
  const [desiredTone, setDesiredTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();

  const getAPIresults = async () => {
    try {
      setLoading(true);
      const response = await copyWritter(
        nameProduct,
        targetAudience,
        description,
        keySellingPoints,
        desiredTone
      );
      setResults(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAPIresults();
  };

  let resultsSection = LoadingData(loading, results, CopyWritingResults);

  return (
    <div className='home'>
      <AboutTool
        title={'Copy Writing'}
        text={
          'Introduce your product or service with a clear and compelling pitch. Fill out the form with the name of your product or service, a brief description, your target audience, key selling points, and your desired tone. \nOur AI-powered tool will then craft a personalized pitch for you, making it easy to effectively promote and market your offering to the right people.'
        }
      />

      <form onSubmit={handleSubmit} className='copywriting-form'>
        <div className='copywriting-form-title text-center mb-3'>
          Enter the information
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <div className='form-group form-floating'>
              <input
                autoComplete='off'
                onChange={(e) => {
                  setNameProduct(e.target.value);
                }}
                required
                type='text'
                className='form-control'
                id='nameProduct'
                aria-describedby='nameProduct'
                placeholder='Enter name of the product or service'
              />
              <label htmlFor='nameProduct'>Name of the product</label>
            </div>
          </div>
          <div className='col'>
            <div className='form-group form-floating'>
              <input
                autoComplete='off'
                onChange={(e) => {
                  setTargetAudience(e.target.value);
                }}
                required
                type='text'
                className='form-control'
                id='targetAudience'
                aria-describedby='targetAudience'
                placeholder='Enter target audicence'
              />
              <label htmlFor='targetAudience'>Target audience</label>
            </div>
          </div>
        </div>
        <div className='form-group form-floating mb-2'>
          <input
            autoComplete='off'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
            type='text'
            className='form-control'
            id='description'
            aria-describedby='description'
            placeholder='Enter a description of the product or service'
          />
          <label htmlFor='description'>Description</label>
        </div>

        <div className='row mb-2'>
          <div className='col'>
            <div className='form-group form-floating'>
              <input
                autoComplete='off'
                onChange={(e) => {
                  setKeySellingPoints(e.target.value);
                }}
                required
                type='text'
                className='form-control'
                id='keySellingPoints'
                aria-describedby='keySellingPoints'
                placeholder='Enter the key selling points'
              />
              <label htmlFor='keySellingPoints'>Key Selling Points</label>
            </div>
          </div>
          <div className='col'>
            <div className='form-group form-floating'>
              <input
                autoComplete='off'
                onChange={(e) => {
                  setDesiredTone(e.target.value);
                }}
                required
                type='text'
                className='form-control'
                id='desiredTone'
                aria-describedby='desiredTone'
                placeholder='Enter a desired tone'
              />
              <label htmlFor='desiredTone'>Desired tone</label>
            </div>
          </div>
        </div>
        <div className='form-button'>
          <button type='submit' className='btn btn-dark'>
            Submit data
          </button>
        </div>
      </form>

      {resultsSection}
    </div>
  );
}

export default CopyWriting;
