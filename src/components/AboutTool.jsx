function AboutTool({ title, text }) {
  const lines = text?.split('\n');
  return (
    <div className='abouts'>
      <div className='abouts-title'>{title}</div>

      <div className='abouts-text'>
        {lines.map((line, index) => (
          <p key={index} className='mb-2'>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
export default AboutTool;
