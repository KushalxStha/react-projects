import { useState, useEffect } from "react";

function AddVideo({ addNew, editableVideo, updateVideos, setEditableVideo }) {
  const initialValue = {
    time: "1 month ago",
    channel: "Code Hub",
    verified: true,
    title: "",
    views: "",
  };
  const [videos, setVideos] = useState(initialValue);
  const [stat, setStat] = useState(false);

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
      ? updateVideos(videos)
      : stat
      ? addNew(videos)
      : console.log("no value");
    setEditableVideo(false);
    setVideos(initialValue);
  }
  useEffect(() => {
    if (editableVideo) {
      setVideos(editableVideo);
    }
  }, [editableVideo]);
  return (
    <div className="App">
      <form>
        <input
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
