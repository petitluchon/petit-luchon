export default function Hero() {
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
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/pw/AP1GczMKoeeFTwIii9xJVfByjASKqGC_y7FYj8t9btPDA29ZNAEV7WkXS9tQ4RLSc_7wg00xsKfrz6KQYJEaOyUVEn97BfYbWKnsCRNh4sqmchXOGGmdXx2T_eQ2_1z_Q5L4GQFotmbe-sNghg4HwyyZfJM=w1438-h958-s-no-gm?authuser=0)',
          filter: 'brightness(0.3)'
        }}
      />

      <div className="absolute inset-0 chinese-character text-[20rem] flex items-center justify-center" style={{ opacity: 0.05 }}>
        福
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text)' }}>
            Bienvenue au Petit Luchon
          </h1>
          <p className="text-xl sm:text-2xl mb-4 max-w-3xl mx-auto" style={{ color: 'var(--text)', lineHeight: 1.8 }}>
            Cuisine chinoise authentique et chaleureuse au cœur de Marseille
          </p>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Produits frais • Recettes maison • Accueil familial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('reserver')} className="btn-primary w-full sm:w-auto">
              Réserver une table
            </button>
            <button onClick={() => scrollToSection('commander')} className="btn-secondary w-full sm:w-auto">
              Commander en ligne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
