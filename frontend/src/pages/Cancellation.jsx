import React from 'react';

const Cancellation = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>💸 Cancellation & Refund Policy - RideByte</h1>
      <div style={styles.content}>
        <h2>1. Cancellation Policy</h2>
        <p>
          You may cancel your bike booking up to 1 hour before the scheduled start time without any charges.
          Cancellations made within 1 hour of the start time may incur a partial fee depending on the booking type.
        </p>

        <h2>2. Refund Eligibility</h2>
        <p>
          Refunds are applicable for:
          <ul>
            <li>Timely cancellations as per the policy</li>
            <li>Service disruptions caused by RideByte (e.g., bike malfunction, unavailability)</li>
            <li>Duplicate payments or billing errors</li>
          </ul>
        </p>

        <h2>3. Refund Process</h2>
        <p>
          Refunds will be processed within 5–7 business days to the original payment method. You will receive a confirmation email once the refund is initiated.
        </p>

        <h2>4. Non-Refundable Cases</h2>
        <p>
          Refunds will not be issued for:
          <ul>
            <li>No-shows or late arrivals</li>
            <li>Misuse or damage to the bike</li>
            <li>Violation of RideByte’s rental terms</li>
          </ul>
        </p>

        <h2>5. Contact Support</h2>
        <p>
          For any refund-related queries, please contact our support team at <strong>support@ridebyte.com</strong>.
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
    color: '#e22807ff',
    marginBottom: '30px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Cancellation;
