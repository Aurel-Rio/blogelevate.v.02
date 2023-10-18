import React, { useState } from 'react';

function Inscription() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Logique d'inscription : envoi de l'email et du mot de passe au backend
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;