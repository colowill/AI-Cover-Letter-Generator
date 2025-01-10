import React, {useState, useEffect} from 'react';
import Generator from "./components/generator";
import Profile from "./components/profile";
import { ROUTES } from "./utils/pages";
import { load } from "./utils/storage";


function App() {

  const [page, setPage] = useState(); // useState() allows for state switching between an array. page is default and setPage is the updated state.
  const [resume, setResume] = useState();
  const [AIKey, setAIKey] = useState();

  // Passes stored data to profile section on page load
  useEffect(() => {
    const fetchStorage = async () => {
      const fetchedResume = await load("resume");
      const fetchedAIKey = await load("AIKey");

      setResume(fetchedResume);
      setAIKey(fetchedAIKey);
    };

    fetchStorage();

  }, []);


  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} resume={resume} AIKey={AIKey}/> // setPage prop passed to component generator.js
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
};

export default App;
