import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import AppBody from "./components/AppBody/AppBody"; // Assuming AppBody is in Home folder

export default function App() {
  return (
    <Router>
      <AppBody>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </AppBody>
    </Router>
  );
}
