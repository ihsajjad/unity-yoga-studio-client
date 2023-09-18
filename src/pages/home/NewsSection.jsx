import Lottie from "lottie-react";
import newsAnimation from "../../assets/news-animation.json";

const NewsSection = () => {
  return (
    <section className="section-container w-full h-[80vh] ">
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
        <div className="flex-1">
          <Lottie animationData={newsAnimation} className="w-full h-full" />
        </div>
        <div className="flex flex-col items-end justify-end flex-1 text-center">
          <div className="space-y-4">
            <h2 className="smd:text-4xl text-3xl text-center text-[var(--main-color)] font-bold ">
              Subscribe To Our <br /> Newsletter
            </h2>
            <p className="about-para w-[20rem]  md:ml-0 md:w-[25rem]">
              Stay up-to-date with the latest news & insights from our blog by
              Unity Yoga Studio joining to our newsletter!
            </p>
            <div className="flex flex-col md:flex-row w-[20rem] md:w-[25rem]  gap-y-3  md:mx-0 md:ml-0">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="py-2 px-3 rounded-lg outline-none border-2 border-[var(--main-color)] md:w-full  "
              />
              <button className="rounded-md  border-2 border-[var(--main-color)] md:py-2 py-1 md:px-3 px-2 bg-[var(--main-color)] text-white font-semibold duration-300 md:rounded-r-lg md:-ml-8">
                Subscribe{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
