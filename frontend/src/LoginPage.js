import React, { useState } from 'react';
import Description from './Description';

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission for login or signup here
  };

  return (
    <div>
      <Description /> {/* Add the Description component here */}
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        )}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button onClick={handleToggle}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  );
}

export default LoginSignupPage;
