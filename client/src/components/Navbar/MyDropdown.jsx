import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyDropdown.css";

function MyDropdown(props) {
  const [active, setActive] = useState(false);
  const [GADNames, setGADNames] = useState([]);
    useEffect(() =>{
      axios.get(`http://localhost:3000/GAD/${props.constituencyName}`)
      .then( (res) => {
        setGADNames(res.data);})
        .catch((err) =>{
          console.log(err);
        })

    },[props.constituencyName])
  return (

    
    <div className="custom-dropdown">
      <div
        className={`dropdown-header d-flex justify-content-between ${active ? " active-dropdown-header" : ""}`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <h3>
          {" "}
          {props.constituencyName
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h3>
        <span className="dropdown-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M1.5 5a.5.5 0 0 1 .7 0L8 11.293l5.8-6.293a.5.5 0 0 1 .7.707l-6 6.5a.5.5 0 0 1-.7 0l-6-6.5a.5.5 0 0 1 0-.707z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </span>
      </div>
      <div className={`dropdown-items${active ? " active" : ""}`}>
        {GADNames.map((GADName, index) => (
          <Link key={index} to={`/table?gadName=${encodeURIComponent(GADName)}&constituencyName=${props.constituencyName}`}>
          {GADName
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          </Link>
        ))}
        
      </div>
    </div>
  );
}

export default MyDropdown;
