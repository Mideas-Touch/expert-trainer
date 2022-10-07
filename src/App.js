import { Routes, Route } from "react-router-dom"
import './App.css';
import { Container } from 'react-bootstrap';
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Settings } from './components/Settings'
import { Productivity } from './components/Productivity'
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
