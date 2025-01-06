import Header from './components/header/index';
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/index'
import Cart from './pages/Cart/index'
import NotFound from './components/notFoundBlock/index'

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header value = {searchValue} setSearchValue = {setSearchValue}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
