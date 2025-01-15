import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import { useState } from 'react';
import { auth } from '../../../firebase/firebase';
import AuthDetails from '../authDetails/index';
import './signIn.scss'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const logIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setEmail('');
        setPassword('');
        setError('');
      })
      .catch((err) => console.log('Error: ', err), setError('Извините, ваш аккаунт не найден'));
  };

  return (
    <div className='signin-container'>
      <form>  
        <h2>Log in</h2>
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
        <button onClick={logIn}>log in</button>
        {error ? <p style={{ color: 'red' }}>Error: {error}</p> : ''}
      </form>
      <AuthDetails />
    </div>
  );
}

export default SignIn;
