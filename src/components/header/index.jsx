import './header.scss';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/cart.svg';
import profile from '../../assets/profile.svg';
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
      <div className="header__container-actions">
        <Link to="/cart">
          <button className="header__container-actions__cart-icon">
            <img src={cartIcon} alt="" width={25} height={25} />
            <span>180$</span>
            <span>/</span>
            <span>2</span>
          </button>
        </Link>
        <Link to="/profile">
          <button className="header__container-actions__profile-icon">
            <img src={profile} alt="profile" width={25} height={25} />
            <span>Личный кабинет</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
