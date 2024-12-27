import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sourcecode, setSourcecode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = authService.login({ email, password, sourcecode });
    if (user) {
      // Redirect to Host Dashboard
      navigate('/host/home');
    } else {
      setError('Invalid email/password or source code/password');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>Host Login</h1>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email (optional)"
          />
        </label>
      </div>
      <div>
        <label>
          Source Code:
          <input
            type="text"
            value={sourcecode}
            onChange={(e) => setSourcecode(e.target.value)}
            placeholder="Enter your source code (optional)"
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} style={{ marginTop: '1rem' }}>
        Login
      </button>
    </div>
  );
};

export default Login;
