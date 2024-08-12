import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SuccessAlert from '../components/accessories/SuccessAlert';

interface User {
  firstname: string;
  lastname: string;
  email: string;
}

const Calorie: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/user');
        setUserData(res.data.user);
        console.log(res.data.user);

        const userKey = `${res.data.user.email}_alertShown`;
        const alertShown = localStorage.getItem(userKey);

        if (!alertShown) {
          setShowSuccessAlert(true);
          localStorage.setItem(userKey, 'true');
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [window.location.href]);

  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => setShowSuccessAlert(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  return (
    <div>
      <h1>User Data</h1>
      {showSuccessAlert && <SuccessAlert />}
      {userData ? (
        <div>
          <p className='text-black'>First Name: {userData.firstname}</p>
          <p>Last Name: {userData.lastname}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Calorie;
