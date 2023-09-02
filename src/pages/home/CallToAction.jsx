import React from "react";

const CallToAction = () => {
  return (
    <section className="py-2 bg-[#272f38] ">
      <div className="py-16 md:py-20 lg:py-28 mx-5 md:mx-32">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-5">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-4xl w-full">
                  Follow our yoga programs & challenges
                  </h3>

                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-5">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                  Stay motivated with our guided programs including yoga for
                  beginners, 30 day challenges, meditation courses, Yin yoga
                  programs and deeper dives into yoga topics.
                </p>
              </div>
              <button className="btn ">Explore Our Course </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
