import React, { useState } from 'react';

function ManageUsers() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    address: '',
    email: '',
    bloodGroup: '',
    aadhar: '',
    voterId: '',
    phone: '',
    caste: '',
    religion: '',
    sex: '',
    occupation: '',
    education: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Member added successfully!');
      setFormData({
        name: '',
        fatherName: '',
        dob: '',
        address: '',
        email: '',
        bloodGroup: '',
        aadhar: '',
        voterId: '',
        phone: '',
        caste: '',
        religion: '',
        sex: '',
        occupation: '',
        education: '',
      });
    } else {
      alert('Failed to add member.');
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover blur-md"
        autoPlay
        loop
        muted
      >
        <source
          src="https://www.youtube.com/watch?v=as86Klk5qUE"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-yellow-300 p-8 rounded-xl shadow-lg border-4 border-red-700 max-w-3xl w-full">
          <h2 className="text-3xl font-extrabold mb-6 text-red-700 text-center">
            Manage Political Members
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              />
            </div>
            {/* Father Name */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">
                Father Name
              </label>
              <input
                type="text"
                name="fatherName"
                placeholder="Enter Father Name"
                value={formData.fatherName}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              />
            </div>
            {/* DOB */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              />
            </div>
            {/* Address */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Address</label>
              <textarea
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Blood Group */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                placeholder="Enter Blood Group"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Aadhar */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Aadhar</label>
              <input
                type="text"
                name="aadhar"
                placeholder="Enter Aadhar Number"
                value={formData.aadhar}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Voter ID */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Voter ID</label>
              <input
                type="text"
                name="voterId"
                placeholder="Enter Voter ID"
                value={formData.voterId}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              />
            </div>
            {/* Caste */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Caste</label>
              <input
                type="text"
                name="caste"
                placeholder="Enter Caste"
                value={formData.caste}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Religion */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Religion</label>
              <input
                type="text"
                name="religion"
                placeholder="Enter Religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Sex */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Sex</label>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Occupation */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Occupation</label>
              <input
                type="text"
                name="occupation"
                placeholder="Enter Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Education */}
            <div className="flex flex-col">
              <label className="text-red-700 font-semibold mb-2 text-lg">Education</label>
              <input
                type="text"
                name="education"
                placeholder="Enter Education"
                value={formData.education}
                onChange={handleChange}
                className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-700 text-yellow-300 py-3 px-6 rounded-lg hover:bg-red-800 transition-all font-bold text-lg w-full"
            >
              Add Member
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
