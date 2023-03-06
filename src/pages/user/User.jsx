import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTittle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ashok pula</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ashok@5820</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">28.06.1994</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+916546456458</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">ashok@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Telangana | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="ashok@5820"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Ashok Pula"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="ashok@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+914564656451"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Telangana |India"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://www.hinduwallpaper.com/uploads/26062021012412tubj.jpg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
