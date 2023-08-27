function Video({
  imageId,
  title,
  channel = "Unknown",
  verified,
  views = 0,
  time = "today",
  children
}) {
  return (
    <>
      <div className="container">
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
