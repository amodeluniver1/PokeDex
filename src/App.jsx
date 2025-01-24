
import './App.css';
import Pokemons from './Components/Pokemons';

function App() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="poke_logo"
        className="logo"
      />
      <br />
      <Pokemons />
    </div>
  );
}

export default App;
