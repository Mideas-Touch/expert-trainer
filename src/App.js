import { Routes, Route } from "react-router-dom"

import { Container } from 'react-bootstrap';
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Settings } from './pages/Settings'
import { Productivity } from './pages/Productivity'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
