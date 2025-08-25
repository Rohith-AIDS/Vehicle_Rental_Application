import React from 'react';

const Terms = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📜 Terms & Conditions - RideByte</h1>
      <div style={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using RideByte's services, you agree to comply with and be bound by these terms and conditions.
        </p>

        <h2>2. Rental Eligibility</h2>
        <p>
          Users must be at least 18 years old and possess a valid government-issued ID to rent a bike.
        </p>

        <h2>3. Usage Guidelines</h2>
        <p>
          Bikes must be used responsibly. Any damage caused due to misuse will be charged to the user.
        </p>

        <h2>4. Payment & Refunds</h2>
        <p>
          All payments are to be made via the RideByte app. Refunds are subject to our cancellation policy.
        </p>

        <h2>5. Liability</h2>
        <p>
          RideByte is not responsible for any injuries, accidents, or losses incurred during the rental period.
        </p>

        <h2>6. Privacy Policy</h2>
        <p>
          We respect your privacy. Personal data is handled according to our privacy policy and is never shared without consent.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          RideByte reserves the right to update these terms at any time. Continued use of the service implies acceptance of the updated terms.
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
    color: '#e51d07ff',
    marginBottom: '30px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Terms;
