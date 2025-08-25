import React from 'react';

const blogPosts = [
  {
    title: 'Welcome to RideByte!',
    date: 'August 25, 2025',
    content: 'RideByte is your go-to bike rental service in Chennai. We combine technology and sustainability to make commuting smarter and greener.',
  },
  {
    title: 'Top 3 Benefits of Renting a Bike',
    date: 'August 22, 2025',
    content: 'Bike rentals save money, reduce carbon footprint, and offer flexibility. RideByte makes it easy with app-based booking and real-time tracking.',
  },
  {
    title: 'Explore Chennai on Two Wheels',
    date: 'August 18, 2025',
    content: 'From Marina Beach to Besant Nagar, discover scenic routes and hidden gems across Chennai with RideByte’s reliable bikes.',
  },
];

const Blog = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📰 RideByte Blog</h1>
      <div style={styles.blogList}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.title}>{post.title}</h2>
            <p style={styles.date}>{post.date}</p>
            <p style={styles.content}>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
  },
  header: {
    fontSize: '36px',
    color: '#df180aff',
    marginBottom: '30px',
    textAlign: 'center',
  },
  blogList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '22px',
    marginBottom: '10px',
    color: '#333',
  },
  date: {
    fontSize: '14px',
    color: '#999',
    marginBottom: '10px',
  },
  content: {
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

export default Blog;
