import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/twitter.svg';
import './styles.css';

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState('');

  const disabledSubmit = useMemo(() => !username.length, [username]);

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('@Omnistack:username', username);

    history.push('/timeline');
  }

  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div className="login-wrapper">
      <img src={logo} alt="Omnistack" />

      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleInputChange}
          placeholder="Nome de usuário"
        />

        <button type="submit" disabled={disabledSubmit}>
          Entrar
        </button>
      </form>
    </div>
  );
}
