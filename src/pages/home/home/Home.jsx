import About from "../About";
import CallToAction from "../CallToAction";
import ClassHighlights from "../ClassHighlights";
import Events from "../Events";
import NewsSection from "../NewsSection";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <div>
      {/* About us  */}
      <About />
      {/* Call to action */}
      <CallToAction />
      {/* NewusLetter */}
      <NewsSection />
      <ClassHighlights />
      <Testimonials />
      <Events />
    </div>
  );
};

export default Home;
