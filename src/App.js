import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Victória Bronzatti"
          description="Kitten"
          music="Music epic"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
        likes={432} 
        messages={232} 
        shares={115} 
        name="Victória "
        description="Kitty"
        music="Meow"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
