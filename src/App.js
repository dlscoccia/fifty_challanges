import Aos from 'aos';
import React, { useEffect } from 'react';
import Banner from './components/Banner';
import Challanges from './components/Challanges';
import Nav from './components/Navbar';
import data from './data/data.json'

function App() {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Challanges data={data} />
    </div>
  );
}

export default App;





