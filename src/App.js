import React, {useState} from 'react';
import Generator from "./components/generator";
import Profile from "./components/profile";
import { ROUTES } from "./utils/pages";

function App() {

  const [page, setPage] = useState(); // useState() allows for state switching between an array. page is default and setPage is the updated state.
  const [resume, setResume] = useState();
  const [AIKey, setAIKey] = useState();
  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage}/> // setPage prop passed to component generator.js
    case ROUTES.PROFILE:
      return <Profile // setPage prop passed to component generator.js

      setPage={setPage} 
      resume={resume} 
      setResume={setResume} 
      AIKey={AIKey} 
      setAIKey={setAIKey}

      />  
    default:
      return <Generator setPage={setPage}/>
  }
}

export default App;
