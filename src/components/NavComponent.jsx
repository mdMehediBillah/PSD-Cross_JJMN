import { NavLink } from "react-router-dom";

const NavComponent = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-red-500" : "text-black";
  };
  return (
    <div>
      <ol className="flex gap-3">
        <li>
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="/promo">
            Promo
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyles} to="/search">
            Search
          </NavLink>
        </li>
      </ol>
    </div>
  );
};

export default NavComponent;
