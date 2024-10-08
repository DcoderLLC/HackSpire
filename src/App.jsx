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
import FAQ from "./Pages/FAQ";
import ClinicHome from "./Pages/ClinicHome";

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
          <Route path="/faq" excat element={<FAQ />} />
          <Route path="/clinic-login" exact element={<ClinicLogin />} />
          <Route path="/clinic-home" exact element={<ClinicHome />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
