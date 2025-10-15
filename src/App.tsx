import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Commander from './components/Commander';
import Reservation from './components/Reservation';
import Reviews from './components/Reviews';
import About from './components/About';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Header />
      <main>
        <Hero />
        <BestSellers />
        <Commander />
        <About />
        <Reservation />
        <Reviews />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
