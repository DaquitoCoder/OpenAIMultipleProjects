function LoadingMessage() {
  return (
    <div className='d-flex flex-row justify-content-start message-card message-narrator'>
      <img
        src='https://as1.ftcdn.net/v2/jpg/02/98/08/90/1000_F_298089025_M5g7h3Y3o5y2Aptfe0VKLMHHbsvThQdt.jpg'
        alt='narrator'
        className='rounded-circle'
      />
      <div className='spinner small ms-2 mb-1 rounded-3 bg-primary-subtle border border-primary-subtle'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default LoadingMessage;
