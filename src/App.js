import "./styles.css";
import vidsData from "./data/Data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import Vlist from "./components/Vlist";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode]=useState('darkMode');

  function videoReducer(vdo,action){
    switch(action.type){
      case 'ADD':
        return [...vdo, { ...action.payload, id: vdo.length + 1 }];
      case 'DELETE':
        return vdo.filter((vids) => vids.id !== action.payload);
      case 'UPDATE':
        const index = vdo.find((vids) => vids.id === action.payload.id);
        const newVdo = [...vdo];
        newVdo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVdo;
      default:
        return vdo;
    }
  }

  const [vdo,dispatch]=useReducer(videoReducer,vidsData)

  function editVideo(id) {
    setEditableVideo(vdo.find((vids) => vids.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`App ${mode}`}>
        <h1>Videos</h1>
        <button 
          onClick={()=>
            setMode(mode=="darkMode"?"lightMode":"darkMode")
          }>
          Switch Theme
        </button>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
        <Vlist vdo={vdo} dispatch={dispatch} editVideo={editVideo} />
      </div>
    </ThemeContext.Provider>
  );
}
