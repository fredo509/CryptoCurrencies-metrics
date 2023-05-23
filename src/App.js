import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import HomeContainer from './components/HomeContainer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route exact path="myprofile" element={<details />} />
      </Routes>
    </div>
  );
}
