import "./styles.css";
import vidsData from "./data/Data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import Vlist from "./components/Vlist";

export default function App() {
  const [vdo, setVdo] = useState(vidsData);

  function addNew(videos) {
    setVdo([...vdo, { ...videos, id: vdo.length + 1 }]);
  }
  function deleteVideo(id) {
    setVdo(vdo.filter((vids) => vids.id !== id));
  }

  return (
    <div className="App">
      <h1>Videos</h1>
      <AddVideo addNew={addNew} old={vdo} />
      <Vlist vdo={vdo} deleteVideo={deleteVideo} />
    </div>
  );
}
