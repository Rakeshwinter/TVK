import "./style/Profile.css";

function Profile({
  showProfile,
  isProfileOpen,
  setIsProfileOpen,
  constituencyName,
  gadName,
  singleRowData,
}) {
  const profile = singleRowData || {};

  return (
    <div className={`overlay-profile ${isProfileOpen ? " d-none" : ""}`}>
      <div className="custom-modal-profile">
        {/* Close Button */}
        <button
          className="profile-close-btn"
          title="Close"
          onClick={showProfile}
        >
          &times;
        </button>
        <div className="profile-header-row">
          <img
            src={
              profile.Photo
                ? `/images/${profile.Photo}`
                : "/images/download.jpeg"
            }
            alt="Profile"
            className="profile-image-square"
          />
          <div className="profile-main-content">
            <h2 className="profile-name">{profile.Name || "N/A"}</h2>
            <div className="profile-position">{profile.Position || "N/A"}</div>
            <div className="profile-gad">
              <span className="profile-gad-label">GAD Name:</span>{" "}
              {profile.GAD_Name || gadName || "N/A"}
            </div>
            <div className="profile-area">
              <span className="profile-area-label">Area Name:</span>{" "}
              {profile.Area_Name || "N/A"}
            </div>
          </div>
        </div>
        <hr className="profile-divider" />
        <div className="profile-details">
          <div className="row">
            <div className="col-12 col-sm-6 mb-2">
              <strong>Father's Name:</strong> {profile.Father_Name || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Date of Birth:</strong>{" "}
              {profile.DOB ? profile.DOB.slice(0, 10) : "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Email:</strong> {profile.Email || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Phone:</strong> {profile.Phone || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Address:</strong> {profile.Address || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Blood Group:</strong> {profile.Blood_Group || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Aadhar:</strong> {profile.Aadhar || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Voter ID:</strong> {profile.VoterID || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Caste:</strong> {profile.Caste || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Religion:</strong> {profile.Religion || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Sex:</strong> {profile.Sex || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Occupation:</strong> {profile.Occupation || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>Education:</strong> {profile.Education || "N/A"}
            </div>
            <div className="col-12 col-sm-6 mb-2">
              <strong>GAD Type:</strong> {profile.GAD_Type || "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
