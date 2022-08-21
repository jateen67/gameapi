import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchGame from "./components/SearchGame";
import ViewGame from "./components/ViewGame";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchGame />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<ViewGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
