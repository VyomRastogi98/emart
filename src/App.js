import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        


      </Routes>
     
    </div>
  );
}

export default App;
