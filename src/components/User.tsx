import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './User.module.css';

const User = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwtToken_key');

    const axiosInstance = axios.create({
      baseURL: 'https://reqres.in',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    axiosInstance
      .get('/api/users/4')
      .then((response) => {
        console.log('Data:', response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      {user && (
        <div className={styles.userCard}>
          <img src={user.data.avatar} alt={`${user.data.first_name} ${user.data.last_name}`} className={styles.avatar} />
          <h3 className={styles.name}>
            {user.data.first_name} {user.data.last_name}
          </h3>
          <h4 className={styles.email}>
            <a href={`mailto:${user.data.email}`}>{user.data.email}</a>
          </h4>
        </div>
      )}
    </>
  );
};

export default User;
