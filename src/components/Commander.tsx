import { useState } from 'react';
import { X, ShoppingBag, Truck } from 'lucide-react';
import { useSanityData } from '../hooks/useSanityData';
import { queries } from '../lib/sanity';

interface RestaurantInfo {
  orderingInfo: {
    uberEatsLink: string;
    smsNumber: string;
  };
}

export default function Commander() {
  const { data } = useSanityData<RestaurantInfo>(queries.restaurantInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState('');

  const smsNumber = data?.orderingInfo?.smsNumber || '+33625430138';
  const uberEatsLink = data?.orderingInfo?.uberEatsLink || 'https://www.ubereats.com/fr/store/petit-luchon/kGkAMOx3R_mgG5ccDqZ-QA?diningMode=DELIVERY&surfaceName=';

  const handleSendSMS = () => {
    const message = encodeURIComponent(orderDetails);
    const smsLink = `sms:${smsNumber}${navigator.userAgent.includes('iPhone') ? '&' : '?'}body=${message}`;

    window.location.href = smsLink;
  };

  const copyNumber = () => {
    const displayNumber = smsNumber.replace('+33', '0');
    navigator.clipboard.writeText(displayNumber);
    alert('Numéro copié !');
  };

  return (
    <section id="commander" className="py-20 relative" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="absolute bottom-10 left-10 chinese-character text-[8rem] opacity-5">財</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Commander en Ligne</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Choisissez votre mode de commande préféré
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.05)', border: '2px solid rgba(247, 244, 239, 0.2)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)' }}>
                <ShoppingBag size={32} style={{ color: 'var(--text)' }} />
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--text)' }}>Click & Collect</h3>
            </div>
            <p className="mb-6 text-lg" style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.8 }}>
              Commandez vos plats préférés et venez les récupérer directement au restaurant.
            </p>
            <p className="mb-6 text-sm italic" style={{ color: 'var(--text)', opacity: 0.7 }}>
              Uniquement pour retrait sur place
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary w-full"
            >
              Passer une commande à emporter
            </button>
          </div>

          <div
            className="rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.05)', border: '2px solid rgba(247, 244, 239, 0.2)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)' }}>
                <Truck size={32} style={{ color: 'var(--text)' }} />
              </div>
              <h3 className="text-2xl font-semibold" style={{ color: 'var(--text)' }}>Livraison</h3>
            </div>
            <p className="mb-6 text-lg" style={{ color: 'var(--text)', opacity: 0.85, lineHeight: 1.8 }}>
              Vous souhaitez être livré ? Commandez directement via Uber Eats.
            </p>
            <p className="mb-6 text-sm italic" style={{ color: 'var(--text)', opacity: 0.7 }}>
              Livraison rapide à domicile
            </p>
            <a
              href={uberEatsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full block"
            >
              Commander sur Uber Eats
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div
            className="relative max-w-2xl w-full rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-opacity-10 hover:bg-white transition-colors"
              aria-label="Fermer"
            >
              <X size={24} style={{ color: 'var(--text)' }} />
            </button>

            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text)' }}>
              Commander par SMS
            </h3>

            <p className="mb-6 text-lg" style={{ color: 'var(--text)', opacity: 0.9 }}>
              Envoyez votre commande au <br className="sm:hidden" />
              <strong>{smsNumber.replace('+33', '0')}</strong>
            </p>

            <div className="mb-6">
              <label className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                Détails de votre commande
              </label>
              <textarea
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
                placeholder="Exemple :&#10;- 2x Poulet Caramel&#10;- 1x Riz Cantonais&#10;- 1x Nouilles Sautées&#10;&#10;Heure de retrait souhaitée : 19h30&#10;Nom : Dupont"
                rows={8}
                className="w-full"
                style={{ color: 'var(--text)' }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSendSMS}
                className="btn-primary flex-1"
                disabled={!orderDetails.trim()}
              >
                Envoyer par SMS
              </button>
              <button
                onClick={copyNumber}
                className="btn-secondary flex-1"
              >
                Copier le numéro
              </button>
            </div>

            <p className="mt-6 text-sm italic" style={{ color: 'var(--text)', opacity: 0.7 }}>
              Nous vous confirmerons votre commande et l'heure de retrait par SMS.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}