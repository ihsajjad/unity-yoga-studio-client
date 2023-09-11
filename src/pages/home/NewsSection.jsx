import newsSection from "../../assets/newsSection.png"

const NewsSection = () => {
  return (
    // bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1571103189706-cd54b23e81f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]
    <section className="section-container w-auto h-full text-center bg-opacity-50 bg-[var(--secondary-color)]">
      <div className="flex flex-col md:flex-row ">
        <div className="md:flex-1">
          <img
            src={newsSection}
            alt="Image"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col ml-0 md:ml-20 items-center md:items-stretch md:mt-14 gap-y-4">
          <h2 className="section-title w-[20rem] md:ml-7">Subscribe To Our Newsletter</h2>
          <p className="about-para w-[20rem]  md:ml-0 md:w-[25rem]">
            Stay up-to-date with the latest news & insights from our blog by Unity Yoga Studio
            joining to our newsletter!
          </p>
          <div className="flex flex-col md:flex-row w-[20rem] md:w-[25rem]  gap-y-3  md:mx-0 md:ml-0">
            <input  type="text" placeholder="Enter your Email Address" className="py-2 px-3 rounded-lg outline-none border-2 border-[var(--main-color)] md:w-full  " />
            <button className="rounded-md  border-2 border-[var(--main-color)] md:py-2 py-1 md:px-3 px-2 bg-[var(--main-color)] text-white font-semibold duration-300 md:rounded-r-lg md:-ml-8">
              Subscribe{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
