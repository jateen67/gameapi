import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import SearchGame from "./components/SearchGame";
import Title from "./components/Title";
import ViewGame from "./components/ViewGame";

function App() {
  return (
    <div>
      <Title />
      <Routes>
        <Route path="/" element={<SearchGame />} />
        <Route path="/:id" element={<ViewGame />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
