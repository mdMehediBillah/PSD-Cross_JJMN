import logo from '../images/Place-Your-logo.png'
import searchIcon from '../images/Search.png'

import { NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <>
     <nav className="flex w-full flex-wrap items-center justify-center py-4 pl-1 pr-4 text-center sm:justify-between sm:text-left">
      {/* Logo */}
      <div className="logo mb-4 flex w-full justify-center sm:mb-0 sm:w-auto">
        <img src={logo} alt="Logo" style={{ width: '10rem', height: '4rem' }} />{' '}
      </div>
      {/* Text and Search bar */}
      <div className="flex ml-10 w-full flex-col items-center sm:w-auto sm:flex-row sm:space-x-4">
        <div className="links space-x-4 sm:space-x-20">
          <NavLink to="/"
            href="#"
            className="font-sans text-lg font-semibold tracking-widest hover:text-yellow-400">
            HOME
          </NavLink>
          <NavLink to="/"
            className="font-sans text-lg font-semibold tracking-widest hover:text-yellow-400">
            Product
          </NavLink>
          <NavLink to="/"
            className="font-sans text-lg font-semibold tracking-widest hover:text-yellow-400">
            Promo
          </NavLink>
          <NavLink to="/Contact"
            className="font-sans text-lg font-semibold tracking-widest hover:text-yellow-400">
            About
          </NavLink>
          <NavLink to="/Contact"
            className="font-sans text-lg font-semibold tracking-widest hover:text-yellow-400">
            Contact
          </NavLink>
        </div>
        {/* Search icon */}
        <div className="relative flex w-full justify-center sm:w-auto">
          <input
            id="searchInput"
            name="search"
            type="text"
            className="ml-8 h-11 w-full rounded-full bg-[#7f777000] px-3 py-2 font-bold text-white opacity-80 focus:outline-none focus:ring-2 focus:ring-[#776c64] sm:w-4/6"
          />
          <img src={searchIcon} alt="Search" className="absolute right-12 top-2 h-7 w-7" />
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavComponent;
