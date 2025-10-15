import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
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
  };

  return (
    <footer style={{ backgroundColor: 'var(--header-bg)', color: 'var(--header-text)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczMmk4jw4Y7ZAIJ0J7sslY4jOn18rIIp72PveX7Dvv_Q4EOdzo2UJ2Zb3ZFZwrOlcR6RCNl1CnHkRZDbP7u_Wn2972EGzfa57xJtexr-Qgj9iT2E_OFIc32-aFxT2NiTE2cowXGbjX7omxPTCeMDcQxx=w958-h958-s-no-gm?authuser=1"
                  alt="Petit Luchon"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <p className="text-base text-center" style={{ color: 'var(--header-text)', opacity: 0.8, lineHeight: 1.6, fontSize: '1.04rem' }}>
                Restaurant chinois authentique au cœur de Marseille
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--header-text)' }}>
                Horaires
              </h4>
              <div className="text-sm" style={{ color: 'var(--header-text)', opacity: 0.8 }}>
                <p className="mb-1">Tous les jours de :</p>
                <p className="mb-2 font-semibold">11h00 - 22h00</p>
                <p className="italic text-xs">Fermé les samedis</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--header-text)' }}>
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12c9c0bd7b7d68db:0xcbc505249132583f?sa=X&ved=1t:8290&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--header-text)', opacity: 0.8 }}
                  >
                    <MapPin size={18} className="flex-shrink-0" />
                    <span>7 Allée Léon Gambetta 13001 Marseille</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33625430138"
                    className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--header-text)', opacity: 0.8 }}
                  >
                    <Phone size={18} />
                    <span>06 25 43 01 38</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center pt-3 pb-1">
          <p className="text-sm mb-2" style={{ color: 'var(--header-text)', opacity: 0.8 }}>
            © 2025 Petit Luchon. Tous droits réservés.
          </p>
          <p className="text-sm mb-1" style={{ color: 'var(--header-text)', opacity: 0.6 }}>
            <a
              href="https://www.vasseo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Created with <span style={{ color: '#781310' }}>♥</span> by Vasseo
            </a>
          </p>
          <p className="text-sm chinese-character" style={{ color: 'var(--header-text)', opacity: 0.4 }}>
            中 • 餐 • 馆
          </p>
        </div>
      </div>
    </footer>
  );
}
