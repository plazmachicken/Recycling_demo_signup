import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<HomePage />} />

        {/* Placeholder for other routes */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
