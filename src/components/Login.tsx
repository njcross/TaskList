import { useState } from 'react';
import axios from 'axios';
import User from './User'; // Import the User component to display user data
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });
      const jwtToken = response.data.token;
      setToken(jwtToken);
      sessionStorage.setItem('jwtToken_key', jwtToken);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logoutUser = () => {
    sessionStorage.clear();
    setToken('');
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Login</h2>
      <h3 className={styles.info}>Must use this email: eve.holt@reqres.in</h3>
      <h4 className={styles.info}>The password can be anything</h4>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
      <button onClick={logoutUser} className={styles.logoutButton}>Logout</button>
      {token && <User />}
    </div>
  );
};

export default Login;
