import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <header className="layout">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/codewithvetriapi-c56e3.appspot.com/o/BlogImages%2Flogo.png?alt=media&token=01272b6e-fe2e-4ae9-b038-bac5ae8c9748"
        alt=""
        className="logo"
      />

      <ul>
        {Menu &&
          Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link}>{data.name}</a>
            </li>
          ))}
      </ul>
    </header>
  );
}

export default Header;
