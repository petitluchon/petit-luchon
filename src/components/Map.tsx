
export default function Map() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="absolute top-20 left-10 chinese-character text-[8rem] opacity-5 pointer-events-none z-0">
        源
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Nous Trouver</h2>
          <p className="text-lg mb-4" style={{ color: 'var(--text)', opacity: 0.9 }}>
            7 Allée Léon Gambetta, 13001 Marseille
          </p>
          <p className="text-base" style={{ color: 'var(--text)', opacity: 0.8 }}>
            À 5 min à pied de la gare Saint-Charles
            <br />
            Proche du Palais Longchamp et de l'église Saint-Vincent de Paul
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6!2d5.38!3d43.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0bd7b7d68db%3A0xcbc505249132583f!2s7%20All%C3%A9e%20L%C3%A9on%20Gambetta%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte du restaurant Petit Luchon"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ marginTop: '1.5cm' }}>
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12c9c0bd7b7d68db:0xcbc505249132583f?sa=X&ved=1t:8290&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Obtenir l'itinéraire
          </a>
        </div>
      </div>
    </section>
  );
}
