import { useState } from 'react';
import { script } from '../js/api';
import { LoadingData } from '../js/ModellingData';
import AboutTool from '../components/AboutTool';
import ScriptResults from '../components/ScriptResults';

function Scripting() {
  const [prompt, setPrompt] = useState('');
  const [media, setMedia] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await script(prompt, media);
    setResults(data);
    setLoading(false);
  };

  let resultsSection = LoadingData(loading, results, ScriptResults);

  return (
    <div className='home'>
      <AboutTool
        title={'Make a Script for media'}
        text={
          "In this tool, helps content creators develop scripts for their digital projects. By inputting their idea and the medium in which it will be displayed, the tool can generate a script that follows a logical and coherent structure, taking into account elements such as characters, plot, and dialogue.\nThis tool is a valuable resource for anyone looking to create digital content, whether it's a short film, a web series or any other kind of video content. It helps to streamline the pre-production process and ensures that the final product is of high quality."
        }
      />

      <div className='scripting-description'>
        <div className='scripting-form-title'>Enter a description</div>
        <form className='scripting-form' onSubmit={handleSubmit}>
          <div className='form-floating'>
            <input
              className='form-control'
              placeholder='Make a description here'
              autoComplete='off'
              name='prompt'
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            ></input>
            <label className='form-label' htmlFor='textAreaDescription'>
              Prompt
            </label>
          </div>
          <div className='form-floating'>
            <input
              className='form-control'
              placeholder='Make a description here'
              autoComplete='off'
              name='media'
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            ></input>
            <label className='form-label' htmlFor='textAreaDescription'>
              Media
            </label>
          </div>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </form>
      </div>
      {resultsSection}
    </div>
  );
}
export default Scripting;
