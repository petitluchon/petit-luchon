import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const dishes = [
  {
    name: 'Poulet Caramel',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczM_pilrZ_YzRBaspTDF6wXLh183iBlx6GfxTKqbp6251uqlul7NDpxgOHOSzUttSmWFT1AbcD0fbVbdIfh-KbxwpUzA1tsKBflHEesU0tfjf6-em3f1h7-ZYsOwp8nO87fm4scn564pHemHMYI-pwY=w2002-h1602-s-no-gm?authuser=0',
    description: 'Morceaux de poulet tendres enrobés dans une sauce caramel maison'
  },
  {
    name: 'Nouilles Sautées aux Légumes',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNS21_i-N8j3jgSSbN7KHp6SpkhiLdMhcoAHyS1mgMMgWgL2CTTgBax1tjierDEZ4CPYjnKTA4uq_K2AlKRJXqlcHgYBN80QlvMzBugCKJTRmWiuVk53TM4zKgcoTcoIDs9e8h9mzlnZOkVr8h8YUQ=w1198-h958-s-no-gm?authuser=0',
    description: 'Nouilles fraîches sautées au wok avec légumes croquants et épices'
  },
  {
    name: 'Mapo Tofu',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNryZbSraLhm6c-rGhIvAbC1poIvF9tv8im95w7gHsrsdomvTNigb90uSs6LaN5wm5NVD_kzeLbRaC1ZdmfIzzCLAJDx0lILjgj7Y0nAyYsZXGq0ls1YOU89qit2LT4muoh7AalvwiLIvb7QszwXoY=w1198-h958-s-no-gm?authuser=0',
    description: 'Tofu soyeux dans une sauce épicée au porc haché et piment du Sichuan'
  },
  {
    name: 'Bœuf Thaï',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczOASFmgU_Ct33QBXGJsvYYGOUuWh4vhF8Ijxf0UvgD1jAxrTzF0Q0TdURu4_oPhRlcdgYv2dVWGfu5uX2mT6Ws56mB4YK6IVGGB4BBAOO6LQyvK5j7RWYqH9DCCJJzfULE0j4KwotpXrmtkksFMH6Q=w1198-h958-s-no-gm?authuser=0',
    description: 'Bœuf sauté aux légumes croquants et sauce thaï épicée parfumée'
  },
  {
    name: 'Gambas au Sel et Poivre',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNH7Hw3eDnQB3cnLKrkAKLquZkfWbp_SUVlOUHwrHo3ayU-1JL7fe_ohtmBrlT80Tcy8wyk741xz87VIoxussHoPyGOsrG_Mx9q7F2altjH4Df-QSOLrnSI4fMQnuDXP_LtqJi3S-F7nHskcUH_q8c=w1198-h958-s-no-gm?authuser=0',
    description: 'Grosses crevettes croustillantes assaisonnées au sel et poivre noir'
  },
  {
    name: 'Boulette de Poulet Sauce Thaï',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczNqhsNiWSGDy7yDsb3wj-N5gOj6utKcurBR5Tg2BzEN0WHTIvlYSHqCV7-EZyygop1lKnYNct1HZaqCiBnJU39F93TpEYFXzJHUOD3XGTyr7NddXb4rlKmO57yL--Xu8c1zN-d7P108pcur0sX_kDs=w1198-h958-s-no-gm?authuser=0',
    description: 'Boulettes de poulet moelleuses nappées d\'une sauce thaï sucrée-salée'
  }
];

export default function BestSellers() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const dishesPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(dishes.length / dishesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentDishes = dishes.slice(
    currentPage * dishesPerPage,
    (currentPage + 1) * dishesPerPage
  );

  return (
    <section id="best-sellers" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute top-10 right-10 chinese-character text-[8rem] opacity-5">喜</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Nos Best-Sellers</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Découvrez nos plats les plus appréciés, préparés avec soin et passion
          </p>
        </div>

        <div className="relative mb-12">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)', border: '2px solid rgba(247, 244, 239, 0.3)' }}
            aria-label="Plats précédents"
          >
            <ChevronLeft size={28} style={{ color: 'var(--text)' }} />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {currentDishes.map((dish, index) => (
              <div
                key={`${currentPage}-${index}`}
                onClick={() => setIsModalOpen(true)}
                className="group slide-in-right cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-3xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover scale-125 md:scale-125 max-md:scale-[1.35] transition-transform duration-500 group-hover:scale-150 max-md:group-hover:scale-[1.55]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6" style={{ backgroundColor: 'rgba(247, 244, 239, 0.05)' }}>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
                      {dish.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text)', opacity: 0.8 }}>
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)', border: '2px solid rgba(247, 244, 239, 0.3)' }}
            aria-label="Plats suivants"
          >
            <ChevronRight size={28} style={{ color: 'var(--text)' }} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: currentPage === i ? 'var(--text)' : 'rgba(247, 244, 239, 0.3)'
              }}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center">
          <div
            className="inline-block rounded-2xl p-8 shadow-2xl"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.08)', border: '3px solid rgba(247, 244, 239, 0.3)' }}
          >
            <p className="text-lg mb-4" style={{ color: 'var(--text)', opacity: 0.9 }}>
              Envie de découvrir tous nos plats ?
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary text-lg px-8 py-4"
            >
              Voir le menu complet
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-300 shadow-lg"
              aria-label="Fermer"
            >
              <X size={24} className="text-gray-800" />
            </button>
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPF4vK2XtdF2FGjaflVrVc0DJeJNiBpkRpfFfNwSBH2ps-I6jhNdCbE_NU2FfiztTVOprM6fhuNhHXRhzLZGkTRNCtM7V-BMvgedh-6dTglOynv9AyDdpU9f953sjhJDRP84jUsFS3n-ZZwceX5GAM=w2272-h1602-s-no-gm?authuser=0"
              alt="Menu complet"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
