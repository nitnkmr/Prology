import React from "react";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import PlacementGuaranteeCourses from "./components/ui/PlacementGuaranteeCourses";
import CoursesSection from "./components/ui/CoursesSection";
import JobSection from "./components/ui/JobSection";
import TopCompanies from "./components/ui/TopCompanies";
import { Routes, Route } from "react-router-dom";


import ContactForm from "./components/ui/ContactForm";
import Footer from "./components/ui/Footer";
import Login from "./components/ui/Login";
import Signup from "./components/ui/Signup";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Course from "./components/Course";


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
