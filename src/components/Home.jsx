import React from 'react'
import HeroSection from './ui/HeroSection'
import CoursesSection from './ui/CoursesSection'
import PlacementGuaranteeCourses from './ui/PlacementGuaranteeCourses'
import JobSection from './ui/JobSection'
import TopCompanies from './ui/TopCompanies'
import ContactForm from './ui/ContactForm'

const Home = () => {
  return (
    <>
        <HeroSection />
        <CoursesSection />
        <PlacementGuaranteeCourses />
        <JobSection />
        <TopCompanies />
        <ContactForm />
    </>
  )
}

export default Home