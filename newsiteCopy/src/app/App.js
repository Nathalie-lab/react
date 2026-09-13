import './App.css';
import appHeader from "./appHeader.webp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="longImg" style={{ backgroundImage: `url(${appHeader})`}}></div>  
      </header>
    </div>
  );
}

export default App;
