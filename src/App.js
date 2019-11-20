import React, { useState, useRef } from 'react';
import './App.css';
import { Header } from './components'

function App() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const username = usernameInput.current;
    const password = passwordInput.current;
    if (username.value === 'admin' && password.value === 'admin') {
      setIsLoggedIn(true);
      return;
    }
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Simple login form</h2>
        <small>(Hint: try admin/admin)</small>
        {isLoggedIn ? <p>User is logged in</p> : <p>User is logged out</p>}
        <form className="login-form" onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className="login-form__input"
            required
            id="username"
            type="text"
            ref={usernameInput}
          />
          <label htmlFor="password">Password</label>
          <input
            className="login-form__input"
            required
            id="password"
            type="password"
            ref={passwordInput}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
