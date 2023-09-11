import { useState, useEffect, useRef } from "react";
import useVideoDispatch from "../hooks/UseVideoDispatch";

const initialValue = {
    time: "1 month ago",
    channel: "Code Hub",
    verified: true,
    title: "",
    views: "",
  };

function AddVideo({ editableVideo }) {
  const dispatch=useVideoDispatch();
  const [videos, setVideos] = useState(initialValue);
  const [stat, setStat] = useState(false);
  const inputRef=useRef(null);

  function handleChange(e) {
    setVideos({
      ...videos,
      [e.target.name]: e.target.value,
    });
    e.target.value === "" ? setStat(false) : setStat(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    editableVideo
      ? dispatch({type:'UPDATE', payload:videos})
      : stat
      ? dispatch({type:'ADD', payload:videos})
      : console.log("no value");
    setVideos(initialValue);
  }
  useEffect(() => {
    if (editableVideo) {
      setVideos(editableVideo);
    }
    inputRef.current.focus();
  }, [editableVideo]);
  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter Video title"
          value={videos.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="Enter no. of views"
          value={videos.views}
        />
        <button className="addBtn" type="submit" onClick={handleSubmit}>
          {editableVideo ? "Edit " : "Add "}Video
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
