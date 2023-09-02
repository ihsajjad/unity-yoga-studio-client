import React from "react";

const NewsSection = () => {
  return (
    <section className="body-font ">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-7">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#ffffff]">
            Subscribe To Our Newsletter
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> for our newsletter to get the latest news and updates about our upcoming events and classes </p>
        </div>
        <div className="flex flow-row items-center justify-center space-x-5">
            <div className="form-control  w-[20rem]">
              <input
                type="text"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          <button className="btn ">Subscribe </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
