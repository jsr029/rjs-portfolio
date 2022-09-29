import React, { useCallback, useState } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import Cv from './pages/Cv';
import Contact from './pages/Contact';
import './styles/main.css';

function App() {
  const [anchorPoint, setAnchorPoint] = useState({ x:0, y:0 })
  const [show, setShow] = useState(false)
  const handleContextMenu = useCallback (
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/a-propos-de' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
