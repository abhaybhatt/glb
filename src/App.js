import React, { useState } from "react"
import Avatar from './avatar';
import Navbar from "./Navbar";
import ShowDonut from "./3dmodel";
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <div className='mid-section-container'><div className='mid-section'><Avatar x={x} y={y} setX={setX} setY={setY} /></div></div>
          <footer className="footer">Footer</footer></>} />
        <Route path="/avatar" element={<ShowDonut />} />
      </Routes>
    </div>
  );
}

export default App;
