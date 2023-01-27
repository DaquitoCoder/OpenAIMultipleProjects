import Chat from '../components/Chat';
import AboutTool from '../components/AboutTool';

function EscapeGame() {
  return (
    <div className='escape-game d-flex align-items-center flex-column gap-3'>
      <AboutTool title={"Escape Game"} text={"A text-based escape game tool is a software or program that allows players to experience different escape scenarios by simply clicking the 'start game' button. Each time the game is played, the player is presented with a new and unique situation, where they must use their problem-solving skills and critical thinking to escape. \nThe game offers a variety of puzzles and challenges to keep players engaged and entertained. The player can interact with the game using text input and the game will respond with the appropriate action. \nThe objective of the game is to escape the scenario by finding clues and solving puzzles, which will lead to the final solution and the player's escape. With its unique and random scenarios, this tool is a great way to challenge and exercise the mind, while providing hours of fun and entertainment."} />
      <Chat/>
    </div>
  );
}
export default EscapeGame;
