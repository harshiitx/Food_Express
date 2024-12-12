import { LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
/*
-header
--logo
--search
--nav items
--cart logo
*/

const Header = () => {
  return (
    <div id="Header">
      <div>
        <img id="Logo" src={LOGO_URL} />
      </div>

      <div id="title">Food Express</div>
      <div>
        <ul id="Nav_items">
          <li><Link className='links' to="/">Home</Link></li>
          <li><Link className='links' to="/">Get the app</Link></li>
          <li><Link className='links' to="/">Become a partner</Link></li>
        </ul>
      </div>
      <div>
      <Link className='links' to="/"><img id="cart" src={CART_LOGO_URL} /></Link>
      </div>
    </div>
  );
};

export default Header;
