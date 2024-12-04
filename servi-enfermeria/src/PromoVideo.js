import React from 'react';

const PromoVideo = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2rem', background: '#fff' }}>
      <h2>Conoce más sobre nosotros</h2>
      <video width="600" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </section>
  );
};

export default PromoVideo;
