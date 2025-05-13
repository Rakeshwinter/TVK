import "./style/InsertData.css";
import React, { useState } from "react";
import axios from "axios";

function InsertData({
  showModal,
  isModalOpen,
  setIsModalOpen,
  onInsert,
  constituencyName,
  gadName,
}) {
  const [formData, setFormData] = useState({
    constituencyName: constituencyName,
    GAD_Type: "",
    GAD_Name: "",
    Area_Name: "",
    Position: "",
    Name: "",
    Father_Name: "",
    DOB: "",
    Address: "",
    Email: "",
    Blood_Group: "",
    Aadhar: "",
    VoterID: "",
    Phone: "",
    Caste: "",
    Religion: "",
    Sex: "",
    Occupation: "",
    Education: "",
    Photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      await axios.post("http://localhost:3000/insert", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (onInsert) onInsert();
      setIsModalOpen(false);
      setFormData({
        constituencyName: constituencyName,
        GAD_Type: "",
        GAD_Name: "",
        Area_Name: "",
        Position: "",
        Name: "",
        Father_Name: "",
        DOB: "",
        Address: "",
        Email: "",
        Blood_Group: "",
        Aadhar: "",
        VoterID: "",
        Phone: "",
        Caste: "",
        Religion: "",
        Sex: "",
        Occupation: "",
        Education: "",
        Photo: null,
      });
    } catch (err) {
      alert("Failed to insert data.");
    }
  };

  return (
    <div className={`overlay ${isModalOpen ? " d-none" : ""}`}>
      <div className="custom-modal">
        <h2 className="form-title">Add New Member</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid">
            <input
              name="GAD_Type"
              placeholder="GAD Type"
              className="input"
              required
              value={formData.GAD_Type}
              onChange={handleChange}
            />
            <input
              name="GAD_Name"
              placeholder="GAD Name"
              className="input"
              required
              value={formData.GAD_Name}
              onChange={handleChange}
            />
            <input
              name="Area_Name"
              placeholder="Area Name"
              className="input"
              required
              value={formData.Area_Name}
              onChange={handleChange}
            />
            <select
              name="Position"
              className="input"
              required
              value={formData.Position}
              onChange={handleChange}
            >
              <option value="">Position</option>
              <option value="President">President</option>
              <option value="Vice President">Vice President</option>
              <option value="Secretary">Secretary</option>
              <option value="Treasurer">Treasurer</option>
              <option value="Member">Member</option>
              <option value="Other">Other</option>
            </select>
            <input
              name="Name"
              placeholder="Name"
              className="input"
              required
              value={formData.Name}
              onChange={handleChange}
            />
            <input
              name="Father_Name"
              placeholder="Father Name"
              className="input"
              required
              value={formData.Father_Name}
              onChange={handleChange}
            />
            <input
              name="DOB"
              type="date"
              placeholder="DOB"
              className="input"
              required
              value={formData.DOB}
              onChange={handleChange}
            />
            <textarea
              name="Address"
              placeholder="Address"
              className="input"
              required
              value={formData.Address}
              onChange={handleChange}
            />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              className="input"
              required
              value={formData.Email}
              onChange={handleChange}
            />
            <select
              name="Blood_Group"
              className="input"
              required
              value={formData.Blood_Group}
              onChange={handleChange}
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <input
              name="Aadhar"
              placeholder="Aadhar"
              className="input"
              required
              value={formData.Aadhar}
              onChange={handleChange}
            />
            <input
              name="VoterID"
              placeholder="Voter ID"
              className="input"
              required
              value={formData.VoterID}
              onChange={handleChange}
            />
            <input
              name="Phone"
              placeholder="Phone"
              className="input"
              required
              value={formData.Phone}
              onChange={handleChange}
            />
            <input
              name="Caste"
              placeholder="Caste"
              className="input"
              required
              value={formData.Caste}
              onChange={handleChange}
            />
            <input
              name="Religion"
              placeholder="Religion"
              className="input"
              required
              value={formData.Religion}
              onChange={handleChange}
            />
            <select
              name="Sex"
              className="input"
              required
              value={formData.Sex}
              onChange={handleChange}
            >
              <option value="">Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              name="Occupation"
              placeholder="Occupation"
              className="input"
              required
              value={formData.Occupation}
              onChange={handleChange}
            />
            <input
              name="Education"
              placeholder="Education"
              className="input"
              required
              value={formData.Education}
              onChange={handleChange}
            />
            <input
              name="Photo"
              type="file"
              accept="image/*"
              className="input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="actions">
            <button type="submit" className="button" >
              Submit
            </button>
            <button type="button" className="cancel" onClick={showModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InsertData;
