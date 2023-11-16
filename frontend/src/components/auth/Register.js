import React, { useState } from 'react';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle actions upon successful registration (e.g., redirect to login)
        console.log('Registration successful:', data);
      } else {
        // Handle registration error
        console.error('Registration failed:', response);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Create your account</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={registerData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />
      </div>
      <button className="btn-register" onClick={handleRegister}>Sign Up</button>
      <p>Already have an account? <a href="/login">Login Here</a></p>
    </div>
  );
};

export default Register;
