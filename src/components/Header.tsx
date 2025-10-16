import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useSanityData } from '../hooks/useSanityData';
import { queries, urlFor } from '../lib/sanity';

interface RestaurantInfo {
  logo: any;
  phone: string;
}

export default function Header() {
  const { data } = useSanityData<RestaurantInfo>(queries.restaurantInfo);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const logoUrl = data?.logo
    ? urlFor(data.logo).width(200).url()
    : 'https://lh3.googleusercontent.com/pw/AP1GczMmk4jw4Y7ZAIJ0J7sslY4jOn18rIIp72PveX7Dvv_Q4EOdzo2UJ2Zb3ZFZwrOlcR6RCNl1CnHkRZDbP7u_Wn2972EGzfa57xJtexr-Qgj9iT2E_OFIc32-aFxT2NiTE2cowXGbjX7omxPTCeMDcQxx=w958-h958-s-no-gm?authuser=1';

  const phoneNumber = data?.phone || '06 25 43 01 38';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'translate-y-0 opacity-100 shadow-lg'
          : '-translate-y-full opacity-0'
      }`}
      style={{
        backgroundColor: 'var(--header-bg)',
        color: 'var(--header-text)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-70 transition-opacity"
            style={{ color: 'var(--header-text)' }}
          >
            <img
              src={logoUrl}
              alt="Petit Luchon"
              className="h-16 w-auto object-contain"
            />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <nav className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="hover:opacity-70 transition-opacity font-medium"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('best-sellers')}
                className="hover:opacity-70 transition-opacity font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className="hover:opacity-70 transition-opacity font-medium"
              >
                Avis
              </button>
            </nav>
            <button onClick={() => scrollToSection('reserver')} className="btn-light text-sm sm:text-base px-4 sm:px-6 py-2 ml-6">
              Réserver
            </button>
            <button onClick={() => scrollToSection('commander')} className="btn-light text-sm sm:text-base px-4 sm:px-6 py-2">
              Commander
            </button>
            <a href={`tel:+33${phoneNumber.replace(/\s/g, '').substring(1)}`} className="hidden lg:flex items-center gap-2 hover:opacity-70 transition-opacity ml-6">
              <Phone size={18} />
              <span className="font-medium">{phoneNumber}</span>
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--header-text-20)' }}>
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-left hover:opacity-70 transition-opacity font-medium py-2"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('best-sellers')}
                className="text-left hover:opacity-70 transition-opacity font-medium py-2"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className="text-left hover:opacity-70 transition-opacity font-medium py-2"
              >
                Avis
              </button>
              <a href={`tel:+33${phoneNumber.replace(/\s/g, '').substring(1)}`} className="flex items-center gap-2 hover:opacity-70 transition-opacity py-2">
                <Phone size={18} />
                <span className="font-medium">{phoneNumber}</span>
              </a>
              <button onClick={() => scrollToSection('reserver')} className="btn-light text-left py-2">
                Réserver
              </button>
              <button onClick={() => scrollToSection('commander')} className="btn-light text-left py-2">
                Commander
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}