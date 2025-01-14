import './header.scss';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart.svg';
import Search from '../search/index';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://image.tensorartassets.com/model_showcase/0/fb6c7da9-5f3e-e057-8c67-34eb5e11dec0.jpeg"
            alt="shinoa-logo"
            width={60}
            height={60}
          />
          <div className="header__logo-text">
            <h2>Kim Vladislav</h2>
            <h2>My first project react-shop</h2>
          </div>
        </div>
      </Link>
      <Search />
      <Link to="/cart">
        <div className="header__cart-icon">
          <span>180$</span>
          <span>/</span>
          <span>2</span>
          <img src={cartIcon} alt="" width={30} height={50} />
        </div>
      </Link>
      <Link to="signin">
        <button>Sign in</button>
      </Link>
      <Link to="signup">
        <button>Sign up</button>
      </Link>
    </header>
  );
}

export default Header;
