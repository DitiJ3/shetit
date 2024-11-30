import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Profile = () => {
  const [joinedExpeditions, setJoinedExpeditions] = useState([]);

  useEffect(() => {
    const storedExpeditions =
      JSON.parse(localStorage.getItem("joinedExpeditions")) || [];
    setJoinedExpeditions(storedExpeditions);
  }, []);

  const handleLeaveExpedition = (id) => {
    const updatedExpeditions = joinedExpeditions.filter((exp) => exp.id !== id);
    setJoinedExpeditions(updatedExpeditions);
    localStorage.setItem(
      "joinedExpeditions",
      JSON.stringify(updatedExpeditions)
    );
  };

  return (
    <div className="p-4">
      <Header />

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
