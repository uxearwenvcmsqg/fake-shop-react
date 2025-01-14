// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNFYfJxQNDk--pSy3r5mHaHzfIWaHIJuc',
  authDomain: 'fake-shop-react-c5858.firebaseapp.com',
  projectId: 'fake-shop-react-c5858',
  storageBucket: 'fake-shop-react-c5858.firebasestorage.app',
  messagingSenderId: '751877042250',
  appId: '1:751877042250:web:cb750b32521c5b348fb6b3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
