import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebase';

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user || null);
    });

    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('success'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {authUser ? (
        <div>
          <p>Зарегистрирован как: {authUser.email}</p>
          <button onClick={() => userSignOut()}>Выйти</button>
        </div>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </div>
  );
}

export default AuthDetails;
