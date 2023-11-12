import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dash from "./pages/dash/dash";
import Upload from "./pages/upload/upload";
import Authentication from "./pages/auth/auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
