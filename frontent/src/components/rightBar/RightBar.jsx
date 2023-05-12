import React from "react";
import "./RightBar.css";

function RightBar(props) {
  return (
    <div>
      <div className="rightContainer">
        <div className="heading">
          <img src="../../assets/giftBox.png" alt="" className="giftIcon" />
          <div>
            Sany Frusto <span className="spanContent">and </span>3 other friends
            <span className="spanContent"> have birthday today</span>
          </div>
        </div>
        <div className="parentDiv">
          <div className="photoFrame">
            <div className="text">
              <span className="first">CONNECT</span>
              <span className="second">WITH</span>
              <span className="third">HELLO</span>
            </div>
          </div>
        </div>
        <div className="friends">
          <div className="online" style={{ fontSize: "20px" }}>
            Online Friends
          </div>
          <div className="friendsProfile">
            <div className="photoAndBadge">
              <img
                style={{ width: "50px", height: "50px" }}
                src="../../assets/profile7.jpg"
                alt=""
                className="profilePhoto"
              />{" "}
              <span className="profileIconBadge"></span>
            </div>
            <span style={{ marginTop: "10px" }}>Maxien Jo</span>
          </div>
          <div className="friendsProfile">
            <div className="photoAndBadge">
              <img
                style={{ width: "50px", height: "50px" }}
                src="../../assets/profile11.jpg"
                alt=""
                className="profilePhoto"
              />
              <span className="profileIconBadge"></span>
            </div>
            <span style={{ marginTop: "10px" }}>Alan Paul</span>
          </div>
          <div className="friendsProfile">
            <div className="photoAndBadge">
              <img
                style={{ width: "50px", height: "50px" }}
                src="../../assets/profile3.jpg"
                alt=""
                className="profilePhoto"
              />
              <span className="profileIconBadge"></span>
            </div>
            <span style={{ marginTop: "10px" }}>Sany Frusto</span>
          </div>
          <div className="friendsProfile">
            <div className="photoAndBadge">
              <img
                style={{ width: "50px", height: "50px" }}
                src="../../assets/profile10.jpg"
                alt=""
                className="profilePhoto"
              />
              <span className="profileIconBadge"></span>
            </div>
            <span style={{ marginTop: "10px" }}>Selene</span>
          </div>
          <div className="friendsProfile">
            <div className="photoAndBadge">
              <img
                style={{ width: "50px", height: "50px" }}
                src="../../assets/profile4.jpg"
                alt=""
                className="profilePhoto"
              />
              <span className="profileIconBadge"></span>
            </div>
            <span style={{ marginTop: "10px" }}>Nancy Maria</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
