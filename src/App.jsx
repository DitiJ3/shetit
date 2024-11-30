import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import Checklist from "./pages/Checklist";
import Profile from "./pages/Profile";
import Expeditions from "./pages/Expeditions";
import BlogPost from "./components/BlogPost";

function App() {
  const [joinedExpeditions, setJoinedExpeditions] = useState([]);

  const handleLeaveExpedition = (id) => {
    setJoinedExpeditions((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/checklist" element={<Checklist />} />
      <Route
        path="/profile"
        element={
          <Profile
            joinedExpeditions={joinedExpeditions}
            onLeave={handleLeaveExpedition}
          />
        }
      />
      <Route
        path="/expeditions"
        element={<Expeditions setJoinedExpeditions={setJoinedExpeditions} />}
      />
      <Route path="/post/:id" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
