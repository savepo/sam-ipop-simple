import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMePage from './components/AboutMePage';
import ProfessionalProjectionPage from './components/ProfessionalProjectionPage';
import FuturePage from './components/FuturePage';
import Footer from './components/Footer';
import { MainContainer } from './styles';
// Importa otros componentes de página según sea necesario

function App() {
  return (
    <Router>
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<AboutMePage />} />
          <Route path="/proyeccion-profesional" element={<ProfessionalProjectionPage />} /> 
          <Route path="/futuro" element={<FuturePage />} />
        </Routes>        
      </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;
