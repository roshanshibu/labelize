import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dash from "./pages/dash/dash";
import Upload from "./pages/upload/upload";
import ErrorPage from "./pages/errorPage/errorPage";
import Profile from "pages/profile/profile";
import React, { useState } from "react";

export const NotificationContext = React.createContext();
export const DashCardsContext = React.createContext();

function MainRoutes() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [dashCards, setDashCards] = useState([
    { label: "Images Annotated Today", checked: true },
    { label: "Top Tags", checked: true },
    { label: "Images by day", checked: true },
    { label: "Annotation Accuracy", checked: true },
    { label: "Todo (mandatory)", checked: true },
    { label: "Comparison with last week", checked: true },
  ]);
  return (
    <>
      <NotificationContext.Provider
        value={{ showNotifications, setShowNotifications }}
      >
        <DashCardsContext.Provider value={{ dashCards, setDashCards }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dash />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </DashCardsContext.Provider>
      </NotificationContext.Provider>
    </>
  );
}

export default MainRoutes;
