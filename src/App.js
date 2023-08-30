import "./styles.css";
import vidsData from "./data/Data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import Vlist from "./components/Vlist";

export default function App() {
  const [vdo, setVdo] = useState(vidsData);
  const [editableVideo, setEditableVideo] = useState(false);

  function addNew(videos) {
    setVdo([...vdo, { ...videos, id: vdo.length + 1 }]);
  }
  function deleteVideo(id) {
    setVdo(vdo.filter((vids) => vids.id !== id));
  }
  function editVideo(id) {
    setEditableVideo(vdo.find((vids) => vids.id === id));
  }
  function updateVideos(videos) {
    const index = vdo.find((vids) => vids.id === videos.id);
    const newVdo = [...vdo];
    newVdo.splice(index, 1, videos);
    setVdo(newVdo);
  }

  return (
    <div className="App">
      <h1>Videos</h1>
      <AddVideo
        addNew={addNew}
        old={vdo}
        updateVideos={updateVideos}
        editableVideo={editableVideo}
        setEditableVideo={setEditableVideo}
      />
      <Vlist vdo={vdo} deleteVideo={deleteVideo} editVideo={editVideo} />
    </div>
  );
}
