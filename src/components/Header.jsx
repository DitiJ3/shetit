import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("feed"); // Default active tab
  const userName = localStorage.getItem("userName");

  const handleNavigation = (page) => {
    if (activePage !== page) {
      setActivePage(page); // Update active tab
      navigate(`/${page}`); // Navigate to the selected page
    }
  };

  return (
    <div id="nav" className="flex">
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
        <div className="flex gap-10">
          <li
            className={`cursor-pointer ${
              activePage === "profile" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("profile")}
          >
            {userName}
          </li>
          <img
            className="cursor-pointer"
            onClick={() => handleNavigation("profile")}
            src=""
            alt="profile pic"
          />
        </div>
      </ul>
    </div>
  );
};

export default Header;
