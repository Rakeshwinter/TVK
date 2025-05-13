import React, { useState } from 'react';

function ManageConstituency() {
  const [formData, setFormData] = useState({
    gadType: '',
    gadName: '',
    areaName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/constituency', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Constituency data added successfully!');
      setFormData({ gadType: '', gadName: '', areaName: '' });
    } else {
      alert('Failed to add constituency data.');
    }
  };

  return (
    <div className="bg-yellow-300 p-8 rounded-xl shadow-lg border-4 border-red-700 max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-red-700 text-center">
        Manage Constituency
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-red-700 font-semibold mb-2 text-lg">
            GAD Type
          </label>
          <input
            type="text"
            name="gadType"
            placeholder="Enter GAD Type"
            value={formData.gadType}
            onChange={handleChange}
            className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-red-700 font-semibold mb-2 text-lg">
            GAD Name
          </label>
          <input
            type="text"
            name="gadName"
            placeholder="Enter GAD Name"
            value={formData.gadName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-red-700 font-semibold mb-2 text-lg">
            Area Name
          </label>
          <input
            type="text"
            name="areaName"
            placeholder="Enter Area Name"
            value={formData.areaName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-red-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-700 bg-yellow-100 text-red-700"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-700 text-yellow-300 py-3 px-6 rounded-lg hover:bg-red-800 transition-all font-bold text-lg w-full"
        >
          Add Constituency
        </button>
      </form>
    </div>
  );
}

export default ManageConstituency;
