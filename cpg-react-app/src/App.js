import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import axios from './axiosConfig';  

const App = () => {
  const [message, setMessage] = useState('Connected to backend successfully');

  useEffect(() => {
    axios.get('/')  
      .then(response => {
        setMessage(response.data);  
      })
      .catch(error => {
        console.error('Something wrongs about connect to backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;

