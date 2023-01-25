import React, { useState } from 'react';
import { startGame, action } from '../js/api.js';
import LoadingMessage from './chat/LoadingMessage.jsx';
import Message from './chat/Message.jsx';

const Chat = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours().toString().padStart(2, '0');
  let minutes = currentTime.getMinutes().toString().padStart(2, '0');
  let day = currentTime.getDate().toString().padStart(2, '0');
  let month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
  let year = currentTime.getFullYear();
  let formattedDate = day + '/' + month + '/' + year;
  let hora = hours + ':' + minutes;
  

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        date: hora,
      },
    ]);
    setLoading(true);
    const response = await action(userInputValue);
    
    if (response.status === 200) {
      addMessage({
        type: 'narrator',
        text: response.body.response,
        typingIndex: 0,
        date: hora,
      }); // add narrator message
    } else {
      addMessage({
        type: 'narrator',
        text: response.body.detail,
        typingIndex: 0,
        date: hora,
      }); // add narrator message
    }
    setLoading(false);
    if (response.body.game_over) {
      setGameStarted(false);
    }
  };

  const renderMessage = (message, index) => {
    const { type, text, date } = message;
    return <Message key={index} emissor={type} message={text} date={date} />;
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
          //typingIndex: updatedMessages[messageIndex].typingIndex + 1, // increment the typing index
        };
        return updatedMessages;
      });
    }, 100); // update typing index every 100ms
    setTimeout(() => {
      clearInterval(interval);
    }, message.text?.length * 100); // stop updating typing index after message has been fully rendered
  };

  return (
    <div className='card chat'>
      <div className='card-header d-flex justify-content-center align-items-center p-3 bg-dark text-white'>
        <h5 className='mb-0'>Escape from the game!</h5>
      </div>
      <div
        className='card-body overflow-auto bg-dark'
        data-mdb-perfect-scrollbar='true'
        style={{ position: 'relative', height: '400px' }}
      >
        <div className='divider d-flex align-items-center justify-content-center mb-4'>
          <p
            className='text-center mx-3 mb-0 text-white'
            style={{ color: '#a2aab7' }}
          >
            Today - {formattedDate}
          </p>
        </div>
        {messages.map(renderMessage)}
        {loading && (<LoadingMessage />)}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='card-footer text-muted d-flex justify-content-start align-items-center p-3 bg-dark'>
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
            disabled={!gameStarted}
          />
          <button
            type='button'
            className={
              gameStarted
                ? 'btn btn-danger btn-sm ms-2'
                : 'btn btn-success btn-sm ms-2'
            }
            data-mdb-ripple-color='dark'
            onClick={() => {
              startGame().then((response) => {
                setMessages([
                  {
                    type: 'narrator',
                    text: response.body.response,
                    date: hora,
                  },
                ]);
              });
              setGameStarted(true);
            }}
          >
            {gameStarted ? 'Restart' : 'Start Game'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
