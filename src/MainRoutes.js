import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dash from "./pages/dash/dash";
import Upload from "./pages/upload/upload";
import ErrorPage from "./pages/errorPage/errorPage";
import Profile from "pages/profile/profile";
import React, { useState } from "react";

export const NotificationContext = React.createContext();

function MainRoutes() {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <NotificationContext.Provider
        value={{ showNotifications, setShowNotifications }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </NotificationContext.Provider>
    </>
  );
}

export default MainRoutes;
