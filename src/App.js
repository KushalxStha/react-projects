import "./styles.css";
import Video from "./components/Video";
import vidsData from "./data/Data";
import Play from "./components/Play";
import { useState } from "react";
import AddVideo from "./components/AddVideo";

export default function App() {
  const [vdo, setVdo] = useState(vidsData);

  function addNew(videos) {
    setVdo([...vdo, { ...videos, id: vdo.length + 1 }]);
  }

  // console.log("render App");
  return (
    <div className="App">
      <h1>Videos</h1>
      <AddVideo addNew={addNew} old={vdo} />

      <div className="allVideos">
        {vdo.map((element) => (
          <Video
            key={element.id}
            imageId={element.id}
            title={element.title}
            channel={element.channel}
            verified={element.verified}
            views={element.views}
            time={element.time}>
            <Play
              onPlay={() => console.log("Playing...", element.title)}
              onPause={() => console.log("Paused...", element.title)}>
              {element.title} {/* Children Prop */}
            </Play>
          </Video>
        ))}
      </div>
    </div>
  );
}
