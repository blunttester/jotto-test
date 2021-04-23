import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './input';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
      <Input secretWord="party" />
    </div>
  );
}

export default App;
