import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing-page.component";
import CreateFighter from "./components/create-fighter.component";
import FightersList from "./components/fighters-list.component";
import EditFighter from "./components/edit-fighter.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/fighters/create" element={<CreateFighter />} />
          <Route path="/fighters" element={<FightersList />} />
          <Route path="/fighters/update/:id" element={<EditFighter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;