import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbarcontainer}>
          <ul className={style.menuitems}>
            <li>
              <Link to="/home"> HOME </Link>
            </li>
            <li>
              <Link to="/activities"> Activities </Link>
            </li>
            <li>
              <Link to="/home/form"> Create Activity </Link>
            </li>
            <li>
              <Link to="/home/about"> About </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
