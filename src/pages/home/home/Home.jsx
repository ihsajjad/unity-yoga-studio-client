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
      {/* Hero Section */}
      <HeroSection />
      {/* About us  */}
      <About />
      <ClassHighlights />
      <Testimonials />
      <Events />
      <NewsSection />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Home;
