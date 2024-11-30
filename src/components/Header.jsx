import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("feed");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userInfo && userInfo.userName) {
      setUserName(userInfo.userName);
    } else {
      setUserName("Guest");
    }

    const path = window.location.pathname;
    setActivePage(path.substring(1)); 
  }, []);

  const handleNavigation = (page) => {
    if (activePage !== page) {
      setActivePage(page);
      navigate(`/${page}`);
    }
  };

  return (
    <div id="nav" className="flex fixed top-0 left-0 w-full z-10">
      <ul className="flex flex-wrap w-full h-16 content-center justify-around bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-xl">
        <li
          className={`cursor-pointer ${
            activePage === "feed" ? "underline" : ""
          }`}
          onClick={() => handleNavigation("feed")}
        >
          Feed
        </li>
        <li
          className={`cursor-pointer ${
            activePage === "expeditions" ? "underline" : ""
          }`}
          onClick={() => handleNavigation("expeditions")}
        >
          Expeditions
        </li>
        <li
          className={`cursor-pointer ${
            activePage === "checklist" ? "underline" : ""
          }`}
          onClick={() => handleNavigation("checklist")}
        >
          Checklist
        </li>
        
        <div className="flex items-center gap-4">
          <li
            className={`cursor-pointer ${
              activePage === "profile" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("profile")}
          >
            {userName}
          </li>
          <img
            className="cursor-pointer max-w-8"
            onClick={() => handleNavigation("profile")}
            src="src/assets/profile.svg"
            alt="Profile"
          />
        </div>
      </ul>
    </div>
  );
};

export default Header;
