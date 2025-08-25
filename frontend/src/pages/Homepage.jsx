
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }, []);
  return (
    
    <div style={styles.page}>
     <div style={styles.headerContainer}>
  <div style={styles.left}>
    <span style={styles.email}>📧 book@ridebyte.in</span>
  </div>

  <div style={styles.center}>
    <h1 style={styles.logo}>
      <span style={{ color: '#00bcd4' }}>Ride</span>
      <span style={{ color: '#fff' }}>Byte</span>
    </h1>
  </div>

  <div style={styles.right}>
    <Link to="/about" style={styles.link}>About</Link>
    <Link to="/login" style={styles.link}>login</Link>
    <Link to="/blog" style={styles.link}>blog</Link>
  </div>
</div>

   {/* hero section */}
      <div className='fade-in' style={styles.hero}>


        {/* Hero Content */}
        <div style={styles.overlay}>
          <h1 style={styles.title}>Explore India on Two Wheels</h1>
          <p style={styles.subtitles}>Rent scooters, bikes, and superbikes at unbeatable prices.</p>
          <Link to="/bikes">
            <button style={styles.ctaButton}>Book Your Ride</button>
          </Link>
        </div>
      </div>

      {/* Rental Guide Section */}
      <div className='fade-in' style={styles.guideSection}>
        <h2 style={styles.sectionTitle}>Your Ultimate Guide for Rental Vehicles in India</h2>
        <h3 style={styles.subheading}>Compare & Book in a Snap!</h3>
        <div style={styles.guideCard}>
          <img
            src="https://thaka.bing.com/th/id/OIP.kh40XWvUD2Mu-Q0Nh7mPtwHaDZ?w=341&h=160&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Rental Guide"
            style={styles.guideImage}
          />
          <div style={styles.guideText}>
            <ul style={styles.guideSteps}>
              <li><strong>🔍 Search:</strong> Find the perfect bike for your needs.</li>
              <li><strong>📊 Compare:</strong> Evaluate prices and features.</li>
              <li><strong>🛒 Book:</strong> Add to cart or book instantly.</li>
              <li><strong>🏍️ Ride:</strong> Enjoy your journey without limits!</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Cities We Serve Section */}
<div className='fade-in' style={styles.citiesSection}>
  <h2 style={styles.sectionTitle}>Top Cities We Serve in India</h2>
  <p style={styles.subtitle}>
    Unlock the Essence of India's Vibrant Cities with Us! Discover Unmatched Self Drive Rental Services in India's Finest Urban Destinations.
  </p>
  <div style={styles.cityGrid}>
    {[
      { name: 'Bangalore', img: 'https://thaka.bing.com/th/id/OIP.I2SIaR3l25MUeDV6qH8drQHaEo?w=370&h=191&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Chennai', img: 'https://thaka.bing.com/th/id/OIP.U6WomnZ0Roke5wQYPpwgmwHaE8?w=243&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Hyderabad', img: 'https://thaka.bing.com/th/id/OIP.mOKX3Ql3Snzi0agyfmOqdAHaE8?w=298&h=198&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Mumbai', img: 'https://thaka.bing.com/th/id/OIP.u8iGMj_wfSlRV-o19CPhIQHaE8?w=221&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Gokarna', img: 'https://ts3.mm.bing.net/th?id=OIP.rdzEcR7EC7sMOTXsjjkGYgHaI5&pid=15.1' },
      { name: 'Goa', img: 'https://thaka.bing.com/th/id/OIP.13QYrG_OR_ZNhuiR76S7eQHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Pondicherry', img: 'https://thaka.bing.com/th/id/OIP.gi7InjU96eE1oW4XDIMBrAHaE8?w=280&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Pune', img: 'https://thaka.bing.com/th/id/OIP.vCU5Agz_ht9Ahujbpe8VOQHaE7?w=282&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Ahmedabad', img: 'https://thaka.bing.com/th/id/OIP.xTXG3SZThG6KgVPGQ-xpeQHaEK?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Guwahati', img: 'https://thaka.bing.com/th/id/OIP.YIzocte7yaHvB6kDaCCxugHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Coimbatore', img: 'https://thaka.bing.com/th/id/OIP.2ylxkv_WkccSrveOyxqCtwHaEb?w=323&h=193&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
      { name: 'Vizag', img: 'https://thaka.bing.com/th/id/OIP.L70I_DODcRZ8ZfDbwVftgwHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },

    ].map(city => (
      <div key={city.name} style={styles.cityCard}>
        <div style={styles.cityIcon}>
          <img
            src={city.img}
            alt={city.name}
            style={styles.cityImage}
          />
        </div>
        <p style={styles.cityName}>{city.name}</p>
      </div>
    ))}
  </div>
</div>

       {/* Highlights Section */}
      <div className='fade-in' style={styles.highlights}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <img src="https://img.icons8.com/ios-filled/100/motorcycle.png" alt="Bike Models" />
            <p>100+ Bike Models</p>
          </div>
          <div style={styles.feature}>
            <img src="https://img.icons8.com/ios-filled/100/price-tag.png" alt="Low Prices" />
            <p>Lowest Prices Guaranteed</p>
          </div>
          <div style={styles.feature}>
            <img src="https://img.icons8.com/ios-filled/100/customer-support.png" alt="Customer Support" />
            <p>24x7 Customer Support</p>
          </div>
        </div>
      </div>

      {/* Trusted Platform & Testimonial Section */}
      <div className='fade-in' style={styles.trustedSection}>
        <div style={styles.trustedContent}>
          <div style={styles.trustedText}>
            <h2 style={styles.sectionTitle}>
              Discover the Largest & the Most <span style={styles.highlight}>Trusted</span> Bike and Car Rental Platform
            </h2>
            <p style={styles.subtitle}>
              See what our customers say about our rental service.
            </p>
          </div>
          <div style={styles.reviewCard}>
            <p style={styles.reviewText}>
              "The bike was in fantastic condition, and riding through the Goan coastline was a highlight of my trip. The pickup and drop-off were smooth, and the rental service was professional and friendly. Highly recommend for anyone looking to explore Goa on two wheels!"
            </p>
            <p style={styles.reviewer}>— Akshat ⭐⭐⭐⭐⭐</p>
            <p style={styles.reviewMeta}>
              Rented Classic 350 in May 24 • #RideByte #yourtravelpartner
            </p>
          </div>
        </div>
      </div>
       <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Contact Info */}
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>📞 +91-8884414422</p>
          <p>📧 contact@RideByte.com</p>
          <p>📍 Hustlebub Tech Park, HSR Layout, Bengaluru, Karnataka - 560102</p>
        </div>

        {/* About Section */}
        <div style={styles.section}>
          <h3>About Ridebyte</h3>
          <ul style={styles.linkList}>
            <li><a href="/about" style={styles.link}><p>About Us</p></a></li>
        
            <li><a href="/blog" style={styles.link}><p>Blog</p></a></li>
      
          </ul>
        </div>

        {/* Terms Section */}
        <div style={styles.section}>
          <h3>Terms Of Use</h3>
          <ul style={styles.linkList}>
       
            <li><a href="/terms" style={styles.link}><p>Terms & Conditions</p></a></li>
            <li><a href="/cancellation" style={styles.link}><p>Cancellation & Refund Policy</p></a></li>
            <li><a href="/privacy" style={styles.link}><p>Privacy Policy</p></a></li>
          </ul>
        </div>

        {/* Payment Icons */}
        <div style={styles.section}>
          <h3>Payment Channels</h3>
          <div style={styles.paymentIcons}>
            {[
               'visa', 'mastercard', 'rupay', 'paypal', 'amex', 'apple-pay'
            ].map((method) => (
              <img
                key={method}
                src={`https://img.icons8.com/color/48/${method}.png`}
                alt={method}
                style={styles.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
    </div>
    
  );
}

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
    position: 'relative',
  },
  navbar: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    zIndex: 2,
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#ffffffcc',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
 
navbarContainer: {
    position: 'absolute',     // Keeps it fixed on screen
    top: '20px',           // Distance from top
    left: '20px',          // Distance from left
    zIndex: 1000,          // Ensures it stays above other elements
  },



  loginButtons: {
    backgroundColor: '#ee330aff',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, background-color 0.3s ease',
  },



  hero: {
    backgroundImage: 'url(https://th.bing.com/th/id/R.a514cfa0613f4fcec7e79b2f503519be?rik=S%2fmTFvOIYC5hCA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-53rfGIi2dK4%2fUjwTXDmgIjI%2fAAAAAAAAArY%2fYAvMZ8gugCk%2fs1600%2fbike%2bhd%2bwallpaper.jpg&ehk=Xih04XXC7xeP6jAfd3c7rN2HRhiWs6SogMLRkIMXI%2bk%3d&risl=&pid=ImgRaw&r=0)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    padding: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
    maxWidth: '600px',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#000000ff',
  },
    subtitles: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#ffffffff',
  },
  ctaButton: {
    padding: '14px 28px',
    fontSize: '1.1rem',
    backgroundColor: '#eb321aff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  guideSection: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  guideCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  guideImage: {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  guideText: {
    maxWidth: '400px',
    textAlign: 'left',
  },
  guideSteps: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#555',
  },
  subheading: {
    fontSize: '1.3rem',
    marginBottom: '20px',
    color: '#555',
  },
  highlights: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '30px',
    color: '#222',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  feature: {
    width: '150px',
    textAlign: 'center',
  },
  citiesSection: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  cityGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '30px',
  },

  

  cityCard: {
    width: '150px',
    textAlign: 'center',
  },

  

  cityIcon: {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '50%',
    border: '2px solid #ccc',
  },

  cityImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

  },

  

  cityName: {
    marginTop: '10px',
    fontWeight: 'bold',
  },

  trustedSection: {
    backgroundColor: '#f0f8ff',
    padding: '60px 20px',
  },
  trustedContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  trustedText: {
    marginBottom: '30px',
  },
  highlight: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '700px',
  },
  reviewText: {
    fontStyle: 'italic',
    fontSize: '1.1rem',
    marginBottom: '15px',
  },
  reviewer: {
    fontWeight: 'bold',
    color: '#333',
  },
  reviewMeta: {
    fontSize: '0.9rem',
    color: '#777',
  },
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#f1f1f1',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    borderTop: '4px solid #ff6f00',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flex: '1 1 200px',
    margin: '20px',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    color: '#f1f1f1',
  },
  

  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  },

  icon: {
    width: '40px',
    height: '40px',
    margin: '5px',
    transition: 'transform 0.3s',
  },
  paymentIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  appLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  a: {
    color: '#f1f1f1',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },


  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '10px 30px',
    color: '#fff',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    textAlign: 'center',
  },
  right: {
    flex: 1,
    textAlign: 'right',
  },
  email: {
    fontSize: '14px',
    color: '#ccc',
  },
  logo: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 'bold',
  },
  link: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },


};

export default HomePage;
