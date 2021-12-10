import React, { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { CartContext } from "../contexts/CartContext";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import BurgerMenu from "./BurgerMenu";
import { Avatar } from "@material-ui/core";

const Navbar = () => {
  const context = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBurgerMenuExit = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={handleBurgerMenuExit}
      >
        <h2 className="header-title">ShoeWay</h2>
      </Link>
      <nav>
        <ul
          className="nav-links"
          style={{
            right: isMenuOpen ? "0%" : "-100%",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/"
            onClick={handleMenuClick}
          >
            <li>Home</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/products"
            onClick={handleMenuClick}
          >
            <li>Products</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to="/about"
            onClick={handleMenuClick}
          >
            <li>About</li>
          </Link>
        </ul>
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
          }}
          to="/admin"
          onClick={handleBurgerMenuExit}
        >
          <Avatar
            style={{ background: "#333", marginBottom: ".5rem" }}
            src=""
          />
        </Link>
        <div className="cart-container">
          <Link
            to="/checkout"
            style={{ color: "#333" }}
            onClick={handleBurgerMenuExit}
          >
            <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
          </Link>
          <div className="cart-content">{context.cart.length}</div>
        </div>
        <BurgerMenu handleClick={handleMenuClick} value={isMenuOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
