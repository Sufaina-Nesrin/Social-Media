import "./TopBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function TopBar(props) {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">HELLO.</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, Post or Video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/picture.jpeg" alt="" className="topBarImage" />
      </div>
    </div>
  );
}

export default TopBar;
