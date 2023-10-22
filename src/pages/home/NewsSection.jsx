import Lottie from "lottie-react";
import newsAnimation from "../../assets/news-animation.json";

const NewsSection = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };
  return (
    <section className="section-container w-full md:h-[80vh] h-fit">
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
        <div className="flex-1">
          <Lottie animationData={newsAnimation} className="w-full h-full" />
        </div>
        <div className="md:flex flex-col items-end justify-end flex-1 text-center">
          <div className="space-y-4 p-3">
            <h2 className="smd:text-4xl text-3xl text-center text-[var(--main-color)] font-bold ">
              Subscribe To Our <br /> Newsletter
            </h2>
            <p className="about-para">
              Stay up-to-date with the latest news & insights from our blog by
              Unity Yoga Studio joining to our newsletter!
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-row w-2/3 mx-auto"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                name="email"
                className="py-2 px-3 rounded-lg outline-none border-2 border-[var(--main-color)] md:w-full  "
              />
              <button className="rounded-md w-fit -ml-5 border-2 border-[var(--main-color)] md:py-2 py-1 md:px-3 px-2 bg-[var(--main-color)] text-white font-semibold duration-300 md:rounded-r-lg md:-ml-8">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
