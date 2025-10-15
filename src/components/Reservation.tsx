import { useState, FormEvent } from 'react';
import { Calendar, Users } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '3'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
Nouvelle réservation - Petit Luchon

Nom: ${formData.name}
Téléphone: ${formData.phone}
Date: ${formData.date}
Nombre de personnes: ${formData.guests}
    `.trim();

    console.log('Réservation:', emailBody);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Réservation envoyée ! Nous vous contacterons bientôt.');
      setFormData({
        name: '',
        phone: '',
        date: '',
        guests: '3'
      });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <section id="reserver" className="py-20 relative" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="absolute top-10 right-20 chinese-character text-[8rem] opacity-5">和</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Réserver une Table</h2>
          <p className="text-lg" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Réservation possible à partir de 3 personnes
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10 shadow-2xl"
          style={{ backgroundColor: 'rgba(247, 244, 239, 0.05)', border: '2px solid rgba(247, 244, 239, 0.2)' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold" style={{ color: 'var(--text)' }}>
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <Calendar size={18} />
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <Users size={18} />
                Nombre de personnes *
              </label>
              <select
                required
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                <option value="3">3 personnes</option>
                <option value="4">4 personnes</option>
                <option value="5">5 personnes</option>
                <option value="6">6 personnes</option>
                <option value="7">7 personnes</option>
                <option value="8">8 personnes</option>
                <option value="9">9 personnes</option>
                <option value="10+">10+ personnes</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
              </button>
            </div>

            {submitMessage && (
              <div
                className="p-4 rounded-lg text-center font-semibold"
                style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)', color: 'var(--text)' }}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
