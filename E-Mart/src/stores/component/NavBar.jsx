import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div className="navSection">
        <Link to="/" className="logo">
          <h2>E-Mart Shop</h2>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search products…" />
        </div>
        <div className="user">
          <div className="user-detail">Sign In / Sign Up</div>
          <Link to="/cart" className="cart-link">
            <div className="cart">
              Cart <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="sub-menu">
        <ul>
          <li><NavLink to="/mobile">Mobiles</NavLink></li>
          <li><NavLink to="/computer">Computers</NavLink></li>
          <li><NavLink to="/watch">Watches</NavLink></li>
          <li><NavLink to="/men">Men's Wear</NavLink></li>
          <li><NavLink to="/woman">Women's Wear</NavLink></li>
          <li><NavLink to="/ac">ACs</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
          <li><NavLink to="/fridge">Fridge</NavLink></li>
          <li><NavLink to="/tv">TV</NavLink></li>
          <li><NavLink to="/speaker">Speakers</NavLink></li>
          <li><NavLink to="/furniture">Furniture</NavLink></li>
          <li><NavLink to="/kitchen">Kitchen</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
