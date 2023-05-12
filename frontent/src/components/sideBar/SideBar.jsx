import React from "react";
import "./sideBar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

function SideBar() {
  return (
    <div className="container">
      <div className="mainContainer">
        <div className="itemContainer">
          <div className="item">
            <RssFeedOutlinedIcon />
            Feed
          </div>
          <div className="item">
            <ChatOutlinedIcon />
            Chats
          </div>
          <div className="item">
            <GroupAddOutlinedIcon />
            Groups
          </div>
          <div className="item">
            {" "}
            <OndemandVideoOutlinedIcon />
            Video{" "}
          </div>
          <div className="item">
            <BookmarkIcon />
            Bookmarks
          </div>
          <div className="item">
            <WorkOutlineOutlinedIcon />
            Jobs
          </div>
          <div className="item">
            <SchoolOutlinedIcon />
            Courses
          </div>
          <div className="item">
            <InsertInvitationOutlinedIcon />
            Events
          </div>
          <div className="item">
            <HelpOutlineOutlinedIcon />
            Questions
          </div>
        </div>
        <div className="buttonContainer1">
          <button className="showMore">Show More</button>
        </div>
        <div className="hrDiv">
          <hr></hr>
        </div>
      </div>

      <div className="sectionTwo">
        <div className="imgContainer">
          <img src="../../assets/profile3.jpg" alt="" className="follow" />
          Sany Frutso
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile4.jpg" alt="" className="follow" />
          Nancy Maria
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile5.jpg" alt="" className="follow" />
          Akady Philps
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile6.jpg" alt="" className="follow" />
          Jhon Doe
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile7.jpg" alt="" className="follow" />
          Maxien jo
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile8.jpg" alt="" className="follow" />
          virah sushi
        </div>
        <div className="imgContainer">
          <img src="../../assets/profile9.jpg" alt="" className="follow" />
          kenzo mark
        </div>
      </div>
    </div>
  );
}

export default SideBar;
