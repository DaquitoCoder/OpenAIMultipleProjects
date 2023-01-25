import Chat from '../components/Chat';

function EscapeGame() {
  return (
    <div className='escape-game d-flex align-items-center flex-column gap-3'>
      <div className='escape-game-about'>
        <div className='escape-game-title'>
          <h1>Escape Game</h1>
        </div>
        <div className='escape-game-description'>
          <p>
            This is a game where you have to escape from a room. You can use commands to interact with the environment. 
          </p>
        </div>
      </div>
      <Chat/>
    </div>
  );
}
export default EscapeGame;
