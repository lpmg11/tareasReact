import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
