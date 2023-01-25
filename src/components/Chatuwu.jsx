import Message from './chat/Message';
import { useState } from 'react';
import { startGame, action } from '../js/api.js';

function Chatuwu() {
  const fecha = new Date();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInputValue = inputValue;
    setInputValue('');
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        type: 'player',
        text: userInputValue,
        typingIndex: -1,
        date: fecha.getHours() + ':' + fecha.getMinutes(),
      },
    ]);
    const response = await action(userInputValue);
    addMessage({
      type: 'narrator',
      text: response.body.response,
      typingIndex: 0,
      date: fecha.getHours() + ':' + fecha.getMinutes(),
    }); // add narrator message
  };
  
  const renderMessage = (message, index) => {
    const { type, text, typingIndex, date } = message;
    return (
      <Message
        key={index}
        emissor={type}
        message={typingIndex !== -1 ? text?.substring(0, typingIndex) : text}
        date={date}
      />
    );
  };

  const addMessage = async (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages]; // make a copy of the messages array
        const messageIndex = updatedMessages.findIndex(
          (m) => m.text === message.text
        ); // find the index of the message to update
        if (messageIndex === -1) return prevMessages;
        updatedMessages[messageIndex] = {
          ...updatedMessages[messageIndex], // spread the existing message properties
          typingIndex: updatedMessages[messageIndex].typingIndex + 1, // increment the typing index
        };
        return updatedMessages;
      });
    }, 100); // update typing index every 100ms
    setTimeout(() => {
      clearInterval(interval);
    }, message.text?.length * 100); // stop updating typing index after message has been fully rendered
  };

  return (
    <section className='text-black'>
      <div className='container py-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10 col-lg-8 col-xl-6'>
            <div className='card' id='chat2'>
              <div className='card-header d-flex justify-content-between align-items-center p-3'>
                <h5 className='mb-0'>Escape game</h5>
                <button
                  type='button'
                  className='btn btn-primary btn-sm'
                  data-mdb-ripple-color='dark'
                  onClick={() => {
                    startGame().then((response) => {
                      setMessages([
                        { type: 'narrator', text: response.body.response },
                      ]);
                    });
                    setShowChat(true);
                    setGameStarted(true);
                  }}
                >
                  {gameStarted ? 'Restart' : 'Start Game'}
                </button>
              </div>
              <div
                className='card-body overflow-auto'
                data-mdb-perfect-scrollbar='true'
                style={{ position: 'relative', height: '400px' }}
              >
                <div className='divider d-flex align-items-center justify-content-center mb-4'>
                  <p
                    className='text-center mx-3 mb-0'
                    style={{ color: '#a2aab7' }}
                  >
                    Today
                  </p>
                </div>
                {messages.map(renderMessage)}
              </div>
              <form onSubmit={handleSubmit}>
                <div className='card-footer text-muted d-flex justify-content-start align-items-center p-3'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp'
                    alt='avatar 3'
                    style={{ width: '45px', height: '100%' }}
                    className='me-2'
                  />
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    id='exampleFormControlInput1'
                    autoFocus={true}
                    placeholder='Type a command'
                    autoComplete='off'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Chatuwu;
