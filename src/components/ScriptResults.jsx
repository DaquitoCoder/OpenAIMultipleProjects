function ScriptResults({ body }) {
  let lines = body?.text.split('\n');

  return (
    <div className='resume-results'>
      <div className='resume-results-title'>Script Results</div>
      <div className='resume-results-text'>
        <ul>
          {lines?.map((line, index) => (
            <li key={index} className='mb-2'>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ScriptResults;
