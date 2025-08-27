
import React, { useState } from 'react';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    availability: false,
    model: '',
    pricePerDay: '',
    type: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: imageUrl }));
  };

  const handleImageUrlChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.value }));
  };

  const handleDeleteImage = () => {
    setFormData((prev) => ({ ...prev, image: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vehicle Data:', formData);
    alert('✅ Vehicle added successfully (front-end only)');
  };

  return (
    <div style={styles.page}>
      <div style={styles.leftPanel}>
        <div style={styles.overlay}>
          <div style={styles.logo}>RIDEBYTE</div>
          <div style={styles.tagline}>
            Welcome back! Log in to your account to view today's clients.
          </div>
        </div>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.container}>
          <h2 style={styles.heading}>
            Admin
          </h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>Vehicle Number</label>
            <input type="text" name="vehicleNumber" onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Model</label>
            <input type="text" name="model" onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Price Per Day (₹)</label>
            <input type="number" name="pricePerDay" onChange={handleChange} required style={styles.input} />

            <label style={styles.label}>Type</label>
            <select name="type" onChange={handleChange} required style={styles.select}>
              <option value="">Select Type</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
            </select>

            <div style={styles.checkboxContainer}>
              <input type="checkbox" name="availability" onChange={handleChange} />
              <label style={styles.label}>Available</label>
            </div>

            <label style={styles.label}>Upload Image (File)</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.input} />

            <label style={styles.label}>Or Enter Image URL</label>
            <input type="text" name="imageUrl" placeholder="https://example.com/image.jpg" onChange={handleImageUrlChange} style={styles.input} />

            {formData.image && (
              <div style={styles.preview}>
                <img src={formData.image} alt="Vehicle" style={styles.previewImg} />
                <button type="button" onClick={handleDeleteImage} style={styles.deleteButton}>×</button>
              </div>
            )}

            <button type="submit" style={styles.button}>Add Vehicle</button>
          </form>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"][style*="height: 100vh"] {
              flex-direction: column;
              height: auto;
            }
            div[style*="padding: 40px"] {
              padding: 20px;
            }
            div[style*="maxWidth: 500px"] {
              max-width: 100%;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          }

          button:hover {
            transform: scale(1.03);
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    flexWrap: 'wrap',
  },
  leftPanel: {
    flex: 1,
    minHeight: '100vh',
    backgroundImage: 'url("https://tse2.mm.bing.net/th/id/OIP.yF4LOv-xU2rl8lyKwPUeQgHaHa?r=0&pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: '40px',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    letterSpacing: '2px',
  },
  tagline: {
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '300px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.4)',
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  container: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textShadow: '1px 1px 3px rgba(106,17,203,0.3)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#6a11cb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(106,17,203,0.3)',
    transition: 'transform 0.2s ease',
  },
  preview: {
    textAlign: 'center',
    position: 'relative',
  },
  previewImg: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  deleteButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: '#ff4d4d',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default AdminPage;
