import searchicon from '../../assets/images/icons/search-icon.png';
import carticon from '../../assets/images/icons/cart.png';
import logo from '../../assets/images/icons/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link"><Link to="/"><img src={logo} alt="logo" /></Link></li>
              <li><Link to="/mac/">Mac</Link></li>
              <li><Link to="/iphone/">iphone</Link></li>
              <li><Link to="/ipad/">ipad</Link></li>
              <li><Link to="/watch/">watch</Link></li>
              <li><Link to="/tv/">tv</Link></li>
              <li><Link to="/music/">Music</Link></li>
              <li><Link to="/support/">Support</Link></li>
              <li className="search-link"><Link to="/search/"><img src={searchicon} alt="search" /></Link></li>
              <li className="cart-link"><Link to="/cart/"><img src={carticon} alt="cart" /></Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
