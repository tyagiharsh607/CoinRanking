import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircle } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const { favorites } = useContext(CoinContext);

  return (
    <nav className="flex items-center justify-between  p-4 px-20 shadow border-b">
      <Link to="/" className="text-gray-700 font-bold">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
          CoinRanking
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 font-bold hover:text-gray-900">
          Cryptocurrency
        </Link>
        <Link
          to="/exchange"
          className="text-gray-700 font-bold hover:text-gray-900"
        >
          Exchange
        </Link>
        <Link to="/favorites" className="text-gray-700 hover:text-gray-900">
          <div className="relative inline-block indicator">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red", fontSize: "1.5rem" }}
            />
            <span
              className="indicator-item badge"
              style={{ backgroundColor: "red " }}
            >
              {" "}
              {favorites.length}
            </span>
          </div>
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}

export default Navbar;
