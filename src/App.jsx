import './app.scss';
import Header from './components/header/index';
import Home from './pages/Home/index';
import Cart from './pages/Cart/index';
import NotFound from './components/notFoundBlock/index';
import SignIn from './pages/auth/signIn/index';
import SignUp from './pages/auth/signUp/index';
import Profile from './pages/profile/index'

import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
