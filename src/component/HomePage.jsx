  import React from "react";

  import Navbar from "../component/Navbar";
  import HeroSection from "../component/HeroSection";
  import QualificationSection from "../component/QualificationSection";
  import SkillsSection from "../component/SkillsSection";
  import ContactSection from "../component/ContactSection";
  import Footer from "../component/Footer";
  import FeaturedProjects from "./FeatureProject";

  function HomePage() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <QualificationSection />
        <SkillsSection />
        <FeaturedProjects/>
        <ContactSection />
        <Footer />
      </>
    );
  }

  export default HomePage;
