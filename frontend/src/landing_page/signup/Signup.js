import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar";
import Footer from "../Footer";

const Signup = () => {
  // 1. Initialize state to match your Schema fields
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace URL with your actual backend endpoint
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      setMessage('Signup successful!');
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} action={{localhost:3002/Signup}}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      
      {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>}
    </div>
    <Footer/>
    </>
  );
};

export default Signup;