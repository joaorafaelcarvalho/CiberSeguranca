import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Generator from './components/Generator';
import AlertPage from './components/AlertPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/alert/:themeId" element={<AlertPage />} />
        <Route path="*" element={<div className="p-10 text-center">404 - Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
