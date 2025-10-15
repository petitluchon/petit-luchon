import { Heart, MapPin, Utensils } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute top-20 right-10 chinese-character text-[8rem] opacity-5">寿</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Une Expérience Authentique</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Bienvenue au Petit Luchon, votre restaurant chinois authentique au cœur de Marseille
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)' }}>
              <Heart size={28} style={{ color: 'var(--text)' }} />
            </div>
            <h3 className="mb-3" style={{ color: 'var(--text)' }}>Accueil Chaleureux</h3>
            <p style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.8 }}>
              Une ambiance familiale et conviviale pour vous faire sentir comme à la maison
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)' }}>
              <Utensils size={28} style={{ color: 'var(--text)' }} />
            </div>
            <h3 className="mb-3" style={{ color: 'var(--text)' }}>Cuisine Maison</h3>
            <p style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.8 }}>
              Des plats préparés avec soin à partir de produits frais et de recettes authentiques
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)' }}>
              <MapPin size={28} style={{ color: 'var(--text)' }} />
            </div>
            <h3 className="mb-3" style={{ color: 'var(--text)' }}>Emplacement Idéal</h3>
            <p style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.8 }}>
              À 5 minutes de la gare Saint-Charles, près des Réformés et du Palais Longchamp
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)', opacity: 0.9 }}>
              Le Petit Luchon vous invite à voyager dans une ambiance typiquement chinoise, avec un décor soigné et une grande terrasse en plein cœur de Marseille.
            </p>
            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)', opacity: 0.9 }}>
              Nous proposons une cuisine maison, préparée avec passion à partir de produits frais et traditionnels.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text)', opacity: 0.9 }}>
              Seul, en couple, entre amis ou en famille, vous serez accueillis chaleureusement et avec attention pour une expérience inoubliable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPsDOo8aCG2JONzPCKrDIuex_19VCofsB4VwtVGU0HJ-LQz4Rv--L7Q4teDDViUctQ_hQ2OJpyMn0zpZQra17CXt_v7fs_nlM7QettbGcELTabqQxDLIZCzx3cQ2MYhkpbSauIHR9xgP_vtIFS3rE4=w2136-h1602-s-no-gm?authuser=0"
                alt="Intérieur du restaurant"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMBi8I76TXIFEwcvfAhJt4oHDa44WNMLGMOBFjGumAGATYmlY5ni9Z09IsZH0cYkx7i1dHrAlYWRHoYUxgtX-Jp7D5-YvAuhgGTyGUU-9oCpId8wTbd6kBOG6Jo_6ylKSwAkIfDW8D_O9QQ1n_ue_4=w2136-h1602-s-no-gm?authuser=0"
                alt="Terrasse"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMRuOgz84ZzGVawpXJfPuS1cxLMMEYDQuTSeg_91drzFgAFDSPqBUBlWkcOSEMcvBCLBC9X2kXVoCXVl7LSiyusE1fP5DNLTp11IZz0lz1EgvNcynesPVpkB-R8bGXE6Tg9SLxyQQVa_VjQfObRRXU=w2136-h1602-s-no-gm?authuser=0"
                alt="Plat signature"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Spécialités"
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
