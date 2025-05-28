// User.tsx
// Example of how to use a JWT to make a request using axios
import { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {

  const [user, setUser] = useState('')

  useEffect(() => {
    // Assuming you have a stored JWT after a successful login
    const jwtToken = sessionStorage.getItem('jwtToken_key');

    // Set up the Axios instance with the Authorization header
    const axiosInstance = axios.create({
      baseURL: 'https://reqres.in',  // reqres's base URL
      headers: {
        'Authorization': `Bearer ${jwtToken}` // JWT goes here
      }
    });

    // Make a sample GET request
    axiosInstance.get('/api/users/4')
      .then(response => {
        console.log('Data:', response.data);
        setUser(response.data)
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // You can also use axiosInstance.post, axiosInstance.put, etc. for other HTTP methods
  }, []);  // Run this effect only once on component mount

  return (
    <div>
      {user &&
      <div>
        <img src={user.data.avatar}></img>
        <h3>{user.data.first_name} {user.data.last_name}</h3>
        <h4>
          <a href="mailto:{user.data.email}">{user.data.email}</a>
        </h4>
      </div>
      }      
    </div>
  );
}

export default User;