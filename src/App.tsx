import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Import des composants du site
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BestSellers from './components/BestSellers';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Commander from './components/Commander';
import Map from './components/Map';
import Footer from './components/Footer';

// Lazy load du Studio
const StudioPage = lazy(() => import('./Studio'));

function MainSite() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BestSellers />
        <Reviews />
        <Reservation />
        <Commander />
        <Map />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route principale du site */}
        <Route path="/" element={<MainSite />} />
        
        {/* Route pour Sanity Studio */}
        <Route 
          path="/studio/*" 
          element={
            <Suspense fallback={<div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100vh',
              fontSize: '1.5rem'
            }}>Chargement du Studio...</div>}>
              <StudioPage />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;