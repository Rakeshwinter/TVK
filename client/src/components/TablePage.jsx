import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import "./style/TablePage.css";
import InsertData from "./InsertData";
import Profile from "./Profile";
function TablePage({ isMenuOpen, setIsMenuOpen }) {
  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null); // <-- Add this line
  const [singleRowData, setSingleRowData] = useState(null);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const showProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  function updateSingleRowData(rowData) {
    setSingleRowData(rowData);
  }
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const gadName = params.get("gadName");
  const constituencyName = params.get("constituencyName");
  const constituencyNameFormatted = constituencyName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const titleName = gadName ? gadName.toUpperCase() : "";

  useEffect(() => {
    if (gadName && constituencyName) {
      axios
        .get(
          `http://localhost:3000/table?gadName=${encodeURIComponent(
            gadName
          )}&constituencyName=${encodeURIComponent(constituencyName)}`
        )
        .then((res) => setTableData(res.data))
        .catch((err) => console.log(err));
    }
  }, [gadName, constituencyName]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown-cell")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Delete handler function
  const handleDelete = async (row) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${row.Name}" (ID: ${row.id})?`
      )
    ) {
      try {
        await axios.delete("http://localhost:3000/delete", {
          params: {
            constituencyName,
            Name: row.Name,
            id: row.id,
          },
        });
        setTableData((prev) => prev.filter((r) => r.id !== row.id));
      } catch (err) {
        alert(
          err.response?.data?.error || "Failed to delete. Please try again."
        );
      }
    }
  };

  console.log("Table Data:", tableData);
  return (
    <>
      <Header
        headerTitle={constituencyNameFormatted}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="title-container d-flex justify-content-center align-items-center">
        <div className="title-float d-flex justify-content-between align-items-center">
          <h3 className="title">{titleName}</h3>
          <button
            className="d-flex justify-content-center align-items-center"
            onClick={showModal}
          >
            <span>Add Member</span>
            <span className="add-icon d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
              >
                <line x1="8" y1="3" x2="8" y2="13" />
                <line x1="3" y1="8" x2="13" y2="8" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="table-page">
        <div className="table-responsive">
          <table className="styled-table">
            <thead>
              <tr>
                <th style={{ width: "4%" }}>#</th>
                <th style={{ width: "12%" }}>Name</th>
                <th style={{ width: "12%" }}>Position</th>
                <th style={{ width: "14%" }}>Area Name</th>
                <th style={{ width: "10%" }}>Education</th>
                <th style={{ width: "12%" }}>Phone</th>
                <th style={{ width: "14%" }}>Email</th>
                <th className="d-none d-xl-table-cell" style={{ width: "18%" }}>
                  Address
                </th>
                <th style={{ width: "4%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ textAlign: "center" }}>
                    No data available
                  </td>
                </tr>
              ) : (
                tableData.map((row, idx) => (
                  <tr key={row.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{row.Name}</td>
                    <td>{row.Position}</td>
                    <td>{row.Area_Name}</td>
                    <td>{row.Education}</td>
                    <td>{row.Phone}</td>
                    <td>{row.Email}</td>
                    <td className="d-none d-xl-table-cell">{row.Address}</td>
                    <td
                      className={`dropdown-cell${
                        openDropdown === idx ? " open" : ""
                      }`}
                    >
                      <button
                        className="more-btn"
                        type="button"
                        onClick={() =>
                          setOpenDropdown(openDropdown === idx ? null : idx)
                        }
                      >
                        More
                      </button>
                      <ul className="custom-dropdown-menu">
                        <li>
                          <button
                            type="button"
                            onClick={() => {
                              showProfile();
                              updateSingleRowData(row);
                            }}
                          >
                            Profile
                          </button>
                        </li>
                        <li>
                          <button type="button">Edit</button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleDelete(row)}
                          >
                            Delete
                          </button>
                        </li>
                        <li>
                          <button type="button">Download PDF</button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <InsertData
        gadName={gadName}
        constituencyName={constituencyName}
        showModal={showModal}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Profile
        gadName={gadName}
        constituencyName={constituencyName}
        showProfile={showProfile}
        isProfileOpen={isProfileOpen}
        setIsProfileOpen={setIsProfileOpen}
        singleRowData={singleRowData}
      />
    </>
  );
}

export default TablePage;
