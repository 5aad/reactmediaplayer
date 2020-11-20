import logo from "./logo.svg";
import "./App.css";
import ReactWebMediaPlayer from "react-web-media-player";

function App() {
  return (
    <div className="App">
      
      <ReactWebMediaPlayer
        title="Big Buck Bunny - 2008"
        thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
        video="https://nusid.net/video.mp4"
        logo={{
          img: "https://nusid.net/your-logo.png",
          href: "https://www.npmjs.com/package/react-web-media-player",
        }}
        width={800}
        height={450}
        style={{ margin:'auto' }}
      />
      </div>
 
  );
}

export default App;
