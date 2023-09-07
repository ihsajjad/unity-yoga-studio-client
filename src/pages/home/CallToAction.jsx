import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section-container">
      {/* to-[var(--secondary-color)] */}
      <div className=" flex md:gap-10 bg-gradient-to-r from-[var(--main-color)] border-2 border-[var(--main-color)]  md:p-8 rounded-lg shadow-xl shadow-[#8f6ea7ab]">
        <div className="flex-1 mb-5">
          <h3 className="mb-4 text-4xl font-bold text-black">
            Follow our yoga programs & <br /> challenges
          </h3>
        </div>
        <div className="flex-1 px-4 lg:w-1/2">
          <div className="mb-5">
            <p className="about-para">
              Stay motivated with our guided programs including yoga for
              beginners, 30 day challenges, meditation courses, Yin yoga
              programs and deeper dives into yoga topics.
            </p>
          </div>
          <Link to="/" className="custom-btn-secondary">
            Explore Our Course{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
