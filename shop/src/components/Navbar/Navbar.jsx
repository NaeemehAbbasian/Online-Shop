import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

import {
  NavbarContainer,
  Brand,
  NavLinks,
  NavLink,
  CartButton,
  CartCount,
} from "./Navbar.styled";
import { useCart } from "../../context/CartContext";

const Navbar = ({ isLoggedIn }) => {
  const { totalQuantity } = useCart();

  return (
    <NavbarContainer>
      <Brand>Shopedia</Brand>
      <NavLinks>
        <NavLink href="/products">Products</NavLink>
        {isLoggedIn ? (
          <NavLink href="#">Profile</NavLink>
        ) : (
          <NavLink href="/login">Login</NavLink>
        )}


        <RouterNavLink to="/cart" style={{ textDecoration: "none" }}>
          <CartButton as="div">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.953.66 2.576a.999.999 0 001.294-.485L9 16l4-8h5"
              />
            </svg>
            <CartCount>{totalQuantity}</CartCount>
          </CartButton>
        </RouterNavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
