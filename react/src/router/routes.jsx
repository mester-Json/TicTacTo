import React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from '../page/GameTicTacTo'

function Router() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default Router;
