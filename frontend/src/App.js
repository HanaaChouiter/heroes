import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { HeroesProvider } from './contexts/Heroes'

import Heroes from './pages/Heroes';
import Hero from './pages/Hero'
import Powers from './pages/Powers'
import Power from './pages/Power';

const App = () => {
  return (
    <HeroesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:slug" element={<Hero />} />
          <Route path="/heroes/:slug/powers" element={<Powers />} />
          <Route path="/heroes/:slug/powers/:power" element={<Power />} />
        </Routes>
      </BrowserRouter>
    </HeroesProvider>
  );
};

export default App;