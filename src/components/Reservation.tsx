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
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageType('success');
        setSubmitMessage('✅ Réservation envoyée avec succès ! Nous vous contacterons bientôt.');
        setFormData({
          name: '',
          phone: '',
          date: '',
          guests: '3'
        });

        // Masquer le message après 5 secondes
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setMessageType('error');
        setSubmitMessage('❌ Une erreur est survenue. Veuillez réessayer ou nous appeler directement.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageType('error');
      setSubmitMessage('❌ Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                style={{ 
                  backgroundColor: messageType === 'success' 
                    ? 'rgba(34, 197, 94, 0.1)' 
                    : 'rgba(239, 68, 68, 0.1)',
                  color: 'var(--text)',
                  border: `2px solid ${messageType === 'success' ? '#22c55e' : '#ef4444'}`
                }}
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