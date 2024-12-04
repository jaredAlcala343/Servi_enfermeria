import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Testimonials = () => {
  const reviews = [
    { name: 'Juan Pérez', comment: '¡Excelente servicio!', rating: 5 },
    { name: 'Ana López', comment: 'Muy profesionales y atentos.', rating: 4 },
  ];

  return (
    <section style={{ padding: '2rem', background: '#f8f9fa' }}>
      <h2>Comentarios y Calificaciones</h2>
      <div>
        {reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h4>{review.name}</h4>
            <p>{review.comment}</p>
            <ReactStars
              count={5}
              value={review.rating}
              size={24}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
