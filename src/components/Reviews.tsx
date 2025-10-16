import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSanityData } from '../hooks/useSanityData';
import { queries } from '../lib/sanity';

interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
}

export default function Reviews() {
  const { data: reviews } = useSanityData<Review[]>(queries.reviews);
  const [currentPage, setCurrentPage] = useState(0);
  
  const reviewsPerPage = 3;
  const reviewList = reviews || [];
  const totalPages = Math.ceil(reviewList.length / reviewsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviewList.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  if (!reviewList.length) {
    return (
      <section id="avis" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="text-center">
          <p style={{ color: 'var(--text)' }}>Chargement des avis...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="avis" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="absolute bottom-10 right-10 chinese-character text-[8rem] opacity-5">吉</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: 'var(--text)' }}>Ce que disent nos clients</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="var(--text)" style={{ color: 'var(--text)' }} />
            ))}
          </div>
          <p className="text-lg" style={{ color: 'var(--text)', opacity: 0.9 }}>
            Note moyenne 5/5 basée sur nos clients
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)', border: '2px solid rgba(247, 244, 239, 0.3)' }}
            aria-label="Avis précédents"
          >
            <ChevronLeft size={28} style={{ color: 'var(--text)' }} />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {currentReviews.map((review, index) => (
              <div
                key={review._id}
                className="group"
                style={{ animation: 'fadeIn 0.5s ease-out' }}
              >
                <div
                  className="rounded-xl p-6 shadow-xl h-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl"
                  style={{ backgroundColor: 'rgba(247, 244, 239, 0.05)', border: '2px solid rgba(247, 244, 239, 0.2)' }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="var(--text)" style={{ color: 'var(--text)' }} />
                    ))}
                  </div>
                  <p className="mb-4 text-base leading-relaxed" style={{ color: 'var(--text)', opacity: 0.9 }}>
                    "{review.comment}"
                  </p>
                  <p className="font-semibold" style={{ color: 'var(--text)' }}>
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 z-10 p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: 'rgba(247, 244, 239, 0.1)', border: '2px solid rgba(247, 244, 239, 0.3)' }}
            aria-label="Avis suivants"
          >
            <ChevronRight size={28} style={{ color: 'var(--text)' }} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
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
      </div>
    </section>
  );
}