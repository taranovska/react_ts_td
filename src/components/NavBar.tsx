import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-2 px1">
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">List</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
