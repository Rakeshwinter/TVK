import "./Navbar.css";
import MyDropdown from "./MyDropdown.jsx";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [tableNames, setTableNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/tables")
      .then((res) => {
        setTableNames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <nav className={` ${isMenuOpen ? " close" : ""}`}>
      <div className="logo-flex">
        <h5>TVK</h5>
        <span
          className="closebtn d-flex align-items-center justify-content-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </span>
      </div>
      <div className="nav-flex">
        <h5>Main</h5>
        {tableNames.map((tableName, index) => (
          <MyDropdown constituencyName={tableName} key={index} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
