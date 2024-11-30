import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const storedInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    return (
      storedInfo || {
        username: localStorage.getItem("loggedInUser") || "User",
        email: "example@example.com",
        fullName: "Full Name",
      }
    );
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editableInfo, setEditableInfo] = useState(userInfo);
  const [joinedExpeditions, setJoinedExpeditions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedExpeditions =
      JSON.parse(localStorage.getItem("joinedExpeditions")) || [];
    setJoinedExpeditions(storedExpeditions);
  }, []);

  const handleSaveUserInfo = () => {
    setUserInfo(editableInfo);
    localStorage.setItem("userInfo", JSON.stringify(editableInfo));
    setIsEditing(false);
  };

  const handleLeaveExpedition = (id) => {
    const updatedExpeditions = joinedExpeditions.filter((exp) => exp.id !== id);
    setJoinedExpeditions(updatedExpeditions);
    localStorage.setItem(
      "joinedExpeditions",
      JSON.stringify(updatedExpeditions)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="p-4">
      <Header />

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 mt-16">
        <h2 className="text-xl font-bold">Profile Information</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-600">Username</label>
            {isEditing ? (
              <input
                type="text"
                value={editableInfo.username}
                onChange={(e) =>
                  setEditableInfo({ ...editableInfo, username: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-lg font-semibold">{userInfo.userName}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={editableInfo.email}
                onChange={(e) =>
                  setEditableInfo({ ...editableInfo, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-lg font-semibold">{userInfo.email}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={handleSaveUserInfo}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          )}
        </div>

        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold">My Expeditions</h2>
      {joinedExpeditions.length === 0 ? (
        <p className="text-gray-500 mt-4">
          You don't have any expeditions joined yet.
        </p>
      ) : (
        <div className="space-y-4 mt-4">
          {joinedExpeditions.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div>
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.date}</p>
              </div>
              <button
                onClick={() => handleLeaveExpedition(exp.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Leave
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
