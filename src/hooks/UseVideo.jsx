import { useContext } from "react";
import VideosContext from "../context/VideosContext";

function useVideo() {
    return useContext(VideosContext);
}

export default useVideo;