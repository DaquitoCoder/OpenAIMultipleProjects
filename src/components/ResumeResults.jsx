function ResumeResults({ results }) {
  let uwu = results?.split('\n');

  return (
    <div className='resume-results'>
      <div className='resume-results-title'>Resume Results</div>
      <div className='resume-results-text'>
        <ul>
          {uwu?.map((line, index) => (
            <li key={index} className='mb-2'>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ResumeResults;
