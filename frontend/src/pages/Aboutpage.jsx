import React from 'react';

const Aboutpage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🚴‍♂️ RideByte</h1>
        <p style={styles.tagline}>Smart. Sustainable. Seamless Rides.</p>
      </div>

      <div style={styles.content}>
        <h2>About Us</h2>
        <p>
          RideByte is a tech-driven bike rental service based in Chennai, designed to make urban commuting
          eco-friendly, affordable, and hassle-free. Whether you're exploring the city or heading to work,
          RideByte offers a seamless experience with smart booking, real-time tracking, and flexible rental plans.
        </p>

        <h2>Our Mission</h2>
        <p>
          To revolutionize urban mobility by providing clean, efficient, and accessible bike rentals powered by
          technology and driven by sustainability.
        </p>

        <h2>Why Choose RideByte?</h2>
        <ul>
          <li>🚲 Wide range of bikes for every need</li>
          <li>📱 Easy-to-use mobile and web app</li>
          <li>🌱 Eco-friendly transportation</li>
          <li>💸 Affordable pricing</li>
          <li>🛠️ 24/7 support and maintenance</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '48px',
    color: '#00bcd4',
    margin: '0',
  },
  tagline: {
    fontSize: '20px',
    color: '#555',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Aboutpage;
