import React from "react";
import "./ContentArea.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import SellIcon from "@mui/icons-material/Sell";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function ContentArea() {
  return (
    <div className="containerContent">
      <div className="sectionOne">
        <div className="profile">
          <img
            style={{ width: "50px", height: "50px" }}
            src="../../assets/picture.jpeg"
            alt=""
            className="contentProfile"
          />
          <input
            className="inputContent"
            placeholder="What's  in  your  Mind  Anlyn ?"
          />
        </div>
        <div className="hrContainer">
          <hr></hr>
        </div>
        <div className="iconsAndButton">
          <div className="iconsContainer">
            <div className="icon">
              <PermMediaIcon style={{ color: "red" }} />
              Photo or Video
            </div>
            <div className="icon">
              <SellIcon style={{ color: "blue" }} />
              Tag
            </div>
            <div className="icon">
              <LocationOnIcon style={{ color: "green" }} />
              Location
            </div>
            <div className="icon">
              <EmojiEmotionsIcon style={{ color: "#fcba03" }} />
              Feelings
            </div>
          </div>
          <div className="buttonContainer">
            <button className="share">Share</button>
          </div>
        </div>
      </div>
      <div className="sectionTwo">
        <div className="postProfilePhoto">
          <img src="../../assets/picture.jpeg" alt="" className="postProfile" />
          <div style={{ marginTop: "10px" }}>
            Anlyn Sushoki{" "}
            <span style={{ fontSize: " 12px", color: "grey" }}>
              5 minutes ago
            </span>
          </div>
        </div>
        <div className="description">
          <p style={{ fontFamily: "sans-serif" }}>Had a great meet,</p>
          <div className="postPhoto" style={{ marginTop: "20px" }}>
            <img
              src="../../assets/postPhoto.jpg"
              alt=""
              className="postPhotoContent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
