import About from "../About";
import CallToAction from "../CallToAction";
import NewsSection from "../NewsSection";
import ClassHighlights from "../classHighlights/ClassHighlights";

const Home = () => {
  return (
    <div>
      {/* About us  */}
      <About />
      {/* Call to action */}
      <CallToAction />
      {/* NewusLetter */}
      <NewsSection />
      <div>
        <ClassHighlights />
      </div>
    </div>
  );
};

export default Home;
