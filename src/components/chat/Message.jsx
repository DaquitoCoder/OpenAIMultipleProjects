function Message({ emissor, message, date}) {

  if (emissor === 'narrator') {
    return (
      <div className='d-flex flex-row justify-content-start message-card message-narrator'>
        <img
          src='https://as1.ftcdn.net/v2/jpg/02/98/08/90/1000_F_298089025_M5g7h3Y3o5y2Aptfe0VKLMHHbsvThQdt.jpg'
          alt='narrator'
          className='rounded-circle'
        />
        <div>
          <p className='small p-2 ms-2 mb-1 rounded-3 bg-primary-subtle border border-primary-subtle message'>
            {message}
          </p>
          <p className='small ms-3 mb-3 rounded-3 time-stamp'>
            {date}
          </p>
        </div>
      </div>
    );
  }

  if (emissor === 'player') {
    return (
      <div className='d-flex flex-row justify-content-end message-card message-player'>
        <div>
          <p
            className='small p-2 me-2 mb-1 rounded-3 message'
          >
            {message}
          </p>
          <p className='small ms-3 mb-3 rounded-3 time-stamp'>
            {date}
          </p>
        </div>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp'
          alt='avatar 1'
        />
      </div>
    );
  }
}
export default Message;
