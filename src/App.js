import logo from "./logo.svg";
import "./App.css";
import ReactWebMediaPlayer from "react-web-media-player";

function App() {
  return (
    <div className="App">
      <ReactWebMediaPlayer
        title="Key Notez - Summer"
        thumbnail={"https://nusid.net/album-cover.jpg"}
        audio="https://nusid.net/audio.mp3"
        vinyl={{ img: "https://nusid.net/album-cover.jpg", rpm: 10 }}
        logo={{
          img: "https://nusid.net/your-logo.png",
          href: "https://www.npmjs.com/package/react-web-media-player",
        }}
        width={400}
        height={400}
        style={{ margin: "auto" }}
      />
    </div>
  );
}

export default App;
