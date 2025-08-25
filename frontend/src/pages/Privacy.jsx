import React from 'react';

const Privacy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🔒 Privacy Policy - RideByte</h1>
      <div style={styles.content}>
        <h2>1. Introduction</h2>
        <p>
          RideByte is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email, phone number, location, and payment information when you use our services.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          Your data is used to:
          <ul>
            <li>Process bookings and payments</li>
            <li>Improve our services and user experience</li>
            <li>Send updates, offers, and support messages</li>
          </ul>
        </p>

        <h2>4. Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2>5. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal data. Information may be shared with trusted partners only to deliver services or comply with legal obligations.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information. Contact us at <strong>privacy@ridebyte.com</strong> for any requests.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          RideByte may update this privacy policy from time to time. Continued use of our services implies acceptance of the updated policy.
        </p>
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
    fontSize: '32px',
    color: '#e41506ff',
    marginBottom: '30px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Privacy;
