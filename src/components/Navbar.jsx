import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiSearchFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import log from "../assets/color_avatar.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Carro de compra", href: "/cart" },
  { name: "Historial", href: "/order" },
  { name: "Check Out", href: "/checkout" },
  { name: "Admin", href: "/dashboard" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:gap-20 gap-4">
          <Link to="/">
            <FaBars className="size-8" />
          </Link>
        </div>

        {/*Right Side*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={log}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/*show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaUser className="size-8" />
              </Link>
            )}
          </div>
          <button type="button" className="hidden sm:block">
            <MdStars className="size-8" />
          </button>

          <Link
            to="/cart"
            className="relative flex bg-primary p-1 sm:px-6 px-2 items-center rounded-sm"
          >
            <FaShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
