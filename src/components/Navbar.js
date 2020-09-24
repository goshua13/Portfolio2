/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://source.unsplash.com/user/goshua13"
        alt="LOGO"
        className="logonav"
      />

      <nav>
        <div className="link">
          <NavLink to="/Portfolio2">
            <i className="home icon" />
          </NavLink>
          <NavLink to="/about">
            <i className="user icon" />
          </NavLink>
          <NavLink to="/skills">
            <i className="eye icon" />
          </NavLink>
          <NavLink to="/work">
            <i className="cog icon" />
          </NavLink>
        </div>
      </nav>
      <ul className="social-media">
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-aragon-27880216a/s"
            target="_blank"
          >
            <i className="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/the.brogrammer/?hl=en"
            target="_blank"
          >
            <i className="instagram icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/goshua13" target="_blank">
            <i className="github icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
