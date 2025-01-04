import Header from './components/header/index';
import './app.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index'
import Cart from './pages/Cart/index'
import NotFound from './components/notFoundBlock/index'

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
