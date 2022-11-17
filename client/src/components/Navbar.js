import { Link } from "react-router-dom";

import logo from "../data/images/logo.png";
import { MdShoppingCart, MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-5 gap-4 h-24">
      <div className="flex justify-center items-center">
        <p className="font-bold text-2xl">NonoBakery</p>
        <img className="w-12" src={logo} alt="brand-logo" />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <ul className="flex gap-12">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/menu"}>
            <li>Menu</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-6">
        <MdShoppingCart className="text-2xl cursor-pointer hover:scale-75 transition duration-300 ease-in-out" />
        <Link to={"/login"}>
          <button className="flex items-center bg-[#FFCC45] px-6 py-2 rounded-full gap-2 hover:scale-90 transition duration-300 ease-in-out">
            <MdLogin /> Sign in
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
