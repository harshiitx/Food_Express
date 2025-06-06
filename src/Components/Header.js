import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import DateContext from "../utils/DateContext";
import { useSelector } from "react-redux";
/*
-header
--logo
--search
--nav items
--cart logo
*/

const Header = () => {
  const {date} = useContext(DateContext);

  //Subscribing to the store using the selector
  const cartItems = useSelector((store)=>store.cart.items);
  const cartItemCount = cartItems.reduce((total,item)=>total+item.quantity,0);
  // console.log(cartItems)
  return (
    <header id="Header" role="banner" aria-label="Site header">
      <div>
        <img id="Logo" src={LOGO_URL} alt="Food Express Logo" />
      </div>

      <div id="title" aria-level="1" role="heading">Food Express</div>
      <nav role="navigation" aria-label="Main navigation">
        <ul id="Nav_items" role="menubar">
          <li role="none"><Link className='links' to="/" role="menuitem" aria-label="Go to Home page">Home</Link></li>
          <li role="none"><Link className='links' to="/get-app" role="menuitem" aria-label="Get the mobile app">Get the app</Link></li>
        </ul>
      </nav>
      <div className="cart-count-container" role="button" tabIndex="0" aria-label={`Shopping cart with ${cartItemCount} items`}>
      <div className="cart-count" aria-live="polite" aria-atomic="true">{cartItemCount}</div>
      <Link className='links' to="/cart" aria-label={`View shopping cart (${cartItemCount} items)`}><img id="cart" src={CART_LOGO_URL} alt="Shopping cart icon" /></Link>
      </div>

      <div className="header-date" role="status" aria-label={`Current date: ${date}`}>
         {date}
      </div>
    </header>
  );
};

export default Header;
