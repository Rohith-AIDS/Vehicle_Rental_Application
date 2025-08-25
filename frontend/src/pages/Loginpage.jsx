import React, { useState } from 'react';
 
const Loginpage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
 
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
 
  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
 
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please enter both email and password.');
      return;
    }
    setMessage('✅ Login Successful! Welcome  🚀');
  };
 
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setMessage('✅ Account Created Successfully! Welcome to Bick Wala 🚴‍♂️');
  };
 
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url("https://live.staticflickr.com/8258/8667780378_95be8ad469_h.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      flexDirection: 'column',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,


    },
    form: {
      position: 'relative',
      zIndex: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      width: '300px',
      marginBottom: '20px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    toggle: {
      marginTop: '10px',
      textAlign: 'center',
      color: '#00ffff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    message: {
      fontSize: '18px',
      color: '#28a745',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '15px',
      borderRadius: '8px',
      zIndex: 2,
    },
  };
 
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
 
      {message && <div style={styles.message}>{message}</div>}
 
      {isLogin ? (
        <form style={styles.form} onSubmit={handleLoginSubmit}>
          <h2 style={styles.heading}>Login</h2>
 
          <label style={styles.label}>Email ID</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            style={styles.input}
            required
          />
 
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            style={styles.input}
            required
          />
 
          <button type="submit" style={styles.button}>Login</button>
 
          <div style={styles.toggle} onClick={() => {setIsLogin(false);setMessage('')}}>
            Don't have an account? Create one
          </div>
        </form>
      ) : (
        <form style={styles.form} onSubmit={handleSignupSubmit}>
          <h2 style={styles.heading}>Create Account</h2>
 
          <label style={styles.label}>Username</label>
          <input
            type="text"
            name="username"
            value={signupData.username}
            onChange={handleSignupChange}
            style={styles.input}
            required
          />
 
          <label style={styles.label}>Email ID</label>
          <input
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
            style={styles.input}
            required
          />
 
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
            style={styles.input}
            required
          />
 
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleSignupChange}
            style={styles.input}
            required
          />
 
          <button type="submit" style={styles.button}>Create Account</button>
 
          <div style={styles.toggle} onClick={() => setIsLogin(true)}>
            Already have an account? Login
          </div>
        </form>
      )}
    </div>
  );
};
 
export default Loginpage;
 
 
 