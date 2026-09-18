import './App.css';
import Header from "../header/Header";
import Nav from "../navigator/Nav";
import Article from "../article/Article";
import albumData from "../data.json";
import Footer from "../footer/Footer"

function App() {

  return (
    <div className="App">
      <Nav />
      <Header artist={albumData.artist} nameAlbum={albumData.albumName}/>
      {albumData.listOfTracks.map( track => (
        <Article
          key={track.id} 
          id={track.id} 
          title={track.title} 
          duration={track.duration}
          audio={track.audio}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
