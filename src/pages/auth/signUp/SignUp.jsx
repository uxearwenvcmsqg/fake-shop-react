import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../firebase/firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');
  const [error, setError] = useState('');
  
  const register = (event) => {
    event.preventDefault();
    if (copyPassword !== password) {
      setError('Пароли не совпадают');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail('');
        setPassword('');
        setCopyPassword('');
        setError('');
      })
      .catch((err) => console.log('Error: ', err));
  };

  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="copy password"
          value={copyPassword}
          onChange={(event) => setCopyPassword(event.target.value)}
        />
        <button>Create</button>
        {error ? <p style={{ color: 'red' }}>Error: {error}</p> : ''}
      </form>
    </div>
  );
}

export default SignUp;
