// Login.tsx
// Example of logging in and obtaining a JWT token from reqres.in using Axios
import { useState } from 'react';
import axios from 'axios';
import User from './User';

const Login: React.FC = () => {
  // State variables to store user credentials
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')

  // Function to handle form submission and obtain JWT token from reqres.in
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();    

    try {
      // Make a POST request to your login endpoint with user credentials
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });

      // Log and extract JWT token from response
      console.log("The returned data ", response.data)
      const jwtToken = response.data.token;

      // Set the token so the User component will show up on the page
      setToken(jwtToken)

      // Store JWT token in local storage or state for future use
      // You can see this by going to:
      // developer tools | Application tab | Session Storage dropdown
      sessionStorage.setItem('jwtToken_key', jwtToken);

      // Optional: Redirect user to another page upon successful login
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logoutUser = () => {
    // Clear JWT from session storage
    sessionStorage.clear();
    setToken("")
  };
  

  return (
    <div>
      <h2>Login</h2>
      <h3>Must use this email: eve.holt@reqres.in  </h3>
      <h4>The password can be anything</h4>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} 
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={logoutUser}>Logout</button>
      {token &&
        <User />
      }  
      
    </div>
  );
};

export default Login;