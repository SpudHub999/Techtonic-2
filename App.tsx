import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { Nat } from './Nat';
import { James } from './James';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/nat" element={<Nat />} />
        <Route path="/james" element={<James />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
