import React, { useState, useEffect } from "react";
import Head from "next/head";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleToggle = (toggle) => {
    if (toggle === "menu") {
      setMenuActive(!isMenuActive);
    } else if (toggle === "search") {
      setSearchActive(!isSearchActive);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const menuElement = document.getElementById("menu");
      const burgerElement = document.getElementById("burger");

      if (
        menuElement &&
        burgerElement &&
        !menuElement.contains(event.target) &&
        !burgerElement.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuActive]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        />
      </Head>

      <header className="header" id="header">
        <nav className="navbar container">
          <a href="/" className="brand">
            「 Dev 」
          </a>
          <div
            className={`burger${isMenuActive ? " is-active" : ""}`}
            id="burger"
            onClick={() => handleToggle("menu")}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <span className="overlay" onClick={() => handleToggle("menu")}></span>
          <div className={`menu${isMenuActive ? " is-active" : ""}`} id="menu">
            {isMenuActive && ( // Conditionally render close button when isMenuActive is true
              <span className="close-btn fadeIn" onClick={() => handleToggle("menu")}>
                <i className="bx bx-x"></i>
              </span>
            )}
            <ul className="menu-inner">
              <li className="menu-item">
                <a className="menu-link ul-effect" href="/">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link ul-effect" href="https://d3v.pages.dev">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link ul-effect" href="https://d3v.pages.dev/#what-i-do">
                  What I Do
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link ul-effect" href="/guestbook">
                  Guestbook
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link ul-effect" href="https://d3v.pages.dev/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <span>
            <i
              className="bx bx-search search-toggle"
              onClick={() => handleToggle("search")}
            ></i>
          </span>
          <span>
           <i> <ThemeSwitch /> </i>
          </span>
          <div
            className={`search-block${isSearchActive ? " is-active" : ""}`}
          >
            <form className="search-form">
              <span>
                <i
                  className="bx bx-arrow-back search-cancel"
                  onClick={() => handleToggle("search")}
                ></i>
              </span>
              <input
                type="search"
                name="search"
                className="search-input"
                placeholder="Search here..."
              />
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
