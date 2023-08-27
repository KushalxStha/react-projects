import { useState } from "react";

function AddVideo({ addNew }) {
  const initialValue = {
    time: "1 month ago",
    channel: "Code Hub",
    verified: true,
    title: "",
    views: ""
  };
  const [videos, setVideos] = useState(initialValue);
  const [stat, setStat] = useState(false);

  function handleChange(e) {
    setVideos({
      ...videos,
      [e.target.name]: e.target.value
    });
    e.target.value === "" ? setStat(false) : setStat(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    stat ? addNew(videos) : console.log("no value");
    setVideos(initialValue);
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter Video title"
          value={videos.title}
          // value --> to convert from uncontrolled to controlled
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="Enter no. of views"
          value={videos.views}
        />
        <button className="addBtn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddVideo;
