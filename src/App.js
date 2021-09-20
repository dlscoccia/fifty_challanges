import React from 'react';
import Banner from './components/Banner';
import Challenges from './components/Challenges';
import Nav from './components/Navbar';
import { data } from './data/data.js'

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Challenges data={data} />
    </div>
  );
}

export default App;





