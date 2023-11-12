import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dash from "./pages/dash/dash";
import Upload from "./pages/upload/upload";
import ErrorPage from "./pages/errorPage/errorPage";
import Profile from "pages/profile/profile";

function MainRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
