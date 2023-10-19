import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assests/logo1.png";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const [cartquantity, setcartquantity] = useState(0);
  return (
    <nav>
      <div className="s1">
        <img src={logo} alt="logo1" className="logo" />

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search for Products and more"
            className="search"
          />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        <div className="right">
          <div className="cart">
            <span className="quantity">{cartquantity}</span>

            {/* cart icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>

          {/* user icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="s2">
    <Dropdown>
      <Dropdown.Toggle className="categories" variant="" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <a className="aboutus">About Us</a>
    <a className="contactus">Contact Us</a>
    <Dropdown>
      <Dropdown.Toggle className="more" variant="" id="dropdown-basic">
        More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Terms & Conditions</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </div>
    </nav>
  );
};

export default Navbar;