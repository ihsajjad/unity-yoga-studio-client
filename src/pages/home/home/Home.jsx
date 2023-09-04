import Navbar from "../../../Shared/Navbar";
import About from "../About";
import CallToAction from "../CallToAction";
import ClassHighlights from "../ClassHighlights";
import ContactInfo from "../ContactInfo";
import Events from "../Events";
import HeroSection from "../HeroSection";
import NewsSection from "../NewsSection";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <div>
      {/* Nav Bar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* About us  */}
      <About />
      {/* Call to action */}
      <CallToAction />
      {/* NewusLetter */}
      <NewsSection />
      <ClassHighlights />
      <Testimonials />
      <Events />
      {/* Contact Information and Map */}
       <ContactInfo/>
    </div>
  );
};

export default Home;
