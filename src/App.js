import React from 'react';
import Generator from "./components/generator";
import Profile from "./components/profile";
import {ROUTES} from "./utilities/pages";

function App() {

  const [page, setPage] = useState(); // Array that switches between page-states defined in pages.js
  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator/>
    case ROUTES.PROFILE:
      return <Profile/>
    default:
      return <Generator/>
  }
}

export default App;
