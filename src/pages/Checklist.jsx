import Header from "../components/Header";
import React, { useState, useEffect } from "react";

const Checklist = () => {
  const [checkList, setCheckList] = useState([]);
  const [newChecklistItem, setChecklistItem] = useState("");

  useEffect(() => {
    const savedChecklist = JSON.parse(localStorage.getItem("checkList")) || [];
    setCheckList(savedChecklist);
  }, []);

  useEffect(() => {
    localStorage.setItem("checkList", JSON.stringify(checkList));
  }, [checkList]);

  const addChecklistItem = () => {
    if (newChecklistItem.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: newChecklistItem,
      completed: false,
    };
    setCheckList([...checkList, newItem]);
    setChecklistItem("");
  };

  const toggleComplete = (id) => {
    setCheckList(
      checkList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeChecklistItem = (id) => {
    setCheckList(checkList.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <h2 className="text-xl text-center p-1 font-semibold mt-16 bg-white bg-gradient-to-r from-blue-500 to-green-500 text-white">Be prepared for your next trip by listing your necessary items</h2>
      <div className="p-4 max-w-md mx-auto mt-20 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4">Your Checklist</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a new item..."
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={newChecklistItem}
            onChange={(e) => setChecklistItem(e.target.value)}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={addChecklistItem}
          >
            Add
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {checkList.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-between p-2 border rounded ${
                item.completed ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                  className="mr-2"
                />
                <span
                  className={`${
                    item.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => removeChecklistItem(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Checklist;
