import React from 'react';
import './App.css';
import { Header, LoginForm } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
