import { useContext } from "react";
import VideoDispatchContext from "../context/VideoDispatchContext";

function Video({
  imageId,
  title,
  channel = "Unknown",
  verified,
  views = 0,
  time = "today",
  children,
  editVideo,
}) {
  const dispatch=useContext(VideoDispatchContext);
  return (
    <>
      <div className="container">
        <button className="edit" onClick={() => editVideo(imageId)}>
          Edit
        </button>
        <button className="delete" onClick={() => dispatch({type:'DELETE', payload:imageId})}>
          X
        </button>
        <img
          className="image"
          src={`https://source.unsplash.com/random/250x180?sig=${imageId}`}
          alt=""
        />
        <div className="tname">{title}</div>
        <div className="cname">
          {channel}
          {verified ? "☑️" : null}
        </div>
        <div className="misc">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
