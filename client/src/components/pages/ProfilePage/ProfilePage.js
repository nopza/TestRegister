import React, { useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [profileImg, setprofileImg] = useState();

  const onFileChange = (e) => {
    setprofileImg(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    axios
      .post("http://localhost:4000/api/v1/user-profile", formData, {})
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="file" onChange={onFileChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
