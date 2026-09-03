import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Flowers from './pages/Flowers';
import Home from './pages/Home';
import Birthday from './pages/Birthday';
import Food from './pages/Food';
import Plants from './pages/Plants';
import CardShop from './pages/CardShop';
import All from './pages/All';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/send-flowers' element={<All search={search} />} />
        <Route path='/flowers' element={<Flowers search={search} />} />
        <Route path='/birthday' element={<Birthday search={search} />} />
        <Route path='/food&drink' element={<Food search={search} />} />
        <Route path='/plants' element={<Plants search={search} />} />
        {/* <Route path='/cardshop' element={<CardShop />} /> */}
      </Routes>
    </div>
  );
};

export default App;