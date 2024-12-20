import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PlacementGuaranteeCourses from "./components/PlacementGuaranteeCourses";
import CoursesSection from "./components/CoursesSection";
import JobSection from "./components/JobSection";
import TopCompanies from "./components/TopCompanies";


import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <PlacementGuaranteeCourses/>
      <JobSection />
      <TopCompanies />
      <ContactForm />
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
