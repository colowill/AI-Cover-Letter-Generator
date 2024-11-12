import React, {useState} from 'react';
import Generator from "./components/generator";
import Profile from "./components/profile";
import { ROUTES } from "./utils/pages";

function App() {

  const [page, setPage] = useState(); // Array that switches between page-states defined in pages.js
  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage}/> // setPage prop passed to component generator.js
    case ROUTES.PROFILE:
      return <Profile setPage={setPage}/>  // setPage prop passed to component generator.js
    default:
      return <Generator setPage={setPage}/>
  }
}

export default App;
