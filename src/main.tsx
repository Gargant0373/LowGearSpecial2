import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Landing from './landing/Landing';
import TOS from './TOS';

import './main.css';

createRoot(document.getElementById('root')!).render(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tos" element={<TOS />} />
        <Route path="/privacy" element={<TOS />} />
      </Routes>
    </Router>
);