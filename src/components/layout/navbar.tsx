"use client";

import { useTheme } from "@/context/theme_context";
import Link from "next/link";
import BrandLogo from "./_images/brand_logo.png";
import Image from "next/image";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={BrandLogo} alt="Brand Logo" width={100} height={100} className="brand-logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            {/* Add more nav items as needed */}
          </ul>
          <button
            className="btn border"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            <i
              className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
