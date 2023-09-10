import Video from "./Video";
import Play from "./Play";
import useVideo from "../hooks/UseVideo";

function Vlist({ editVideo }) {
  const vdo=useVideo();
  return (
    <>
      <div className="allVideos">
        {vdo.map((element) => (
          <Video
            key={element.id}
            imageId={element.id}
            title={element.title}
            channel={element.channel}
            verified={element.verified}
            views={element.views}
            time={element.time}
            editVideo={editVideo}
          >
            <Play
              onPlay={() => console.log("Playing...", element.title)}
              onPause={() => console.log("Paused...", element.title)}
            >
              {element.title}
            </Play>
          </Video>
        ))}
      </div>
    </>
  );
}

export default Vlist;
