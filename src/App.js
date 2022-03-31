import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import OtherAnimals from './views/OtherAnimals';


const App = () => {
  // set up a state variable
  const [animals2, setAnimals2] = useState(['Bear', 'Fox', 'Kangaroo', 'Dolphin', 'Cat', 'Mountain Lion', 'Lynx', 'Cheetah']);

  return (
    <div className="App">
      <Navbar animals2={animals2}/>
      <Routes>
        {/*Any "page" of my react app can be defined as a Route within my Routes here */}
        <Route children path='/' element={<Home animals2={animals2} setAnimals2={setAnimals2}/>} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/otheranimals' element={<OtherAnimals />} />
        <Route children path ='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
