import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';

const App = () => {
  // set up a state variable
  const [animals2, setAnimals2] = useState(['Bear', 'Fox', 'Kangaroo', 'Dolphin', 'Cat', 'Mountain Lion', 'Lynx', 'Cheetah']);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/*Any "page" of my react app can be defined as a Route within my Routes here */}
        <Route children path='/' element={<Home animals2={animals2} setAnimals2={setAnimals2}/>} />
        <Route children path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
