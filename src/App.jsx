import "./App.css";
import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Team from "./Pages/Team";
import ClinicLogin from "./Pages/ClinicLogin";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/details" exact element={<Details />} />
          <Route path="/clinic-login" exact element={<ClinicLogin />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
