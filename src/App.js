import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/auth/auth";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="*" element={<MainRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
