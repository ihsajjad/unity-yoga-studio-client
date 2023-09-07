const NewsSection = () => {
  return (
    <section className="section-container text-center">
      <h1 className="section-title">Subscribe To Our Newsletter</h1>
      <p className="about-para">
        {" "}
        for our newsletter to get the latest news and updates about our upcoming
        events and classes{" "}
      </p>
      <div className="flex items-center justify-center mt-5">
        <input
          type="text"
          placeholder="Email Address"
          className="py-2 px-3 rounded-lg outline-none border-2 border-[var(--main-color)] w-full max-w-xs "
        />
        <button className="  @apply border-2 border-[var(--main-color)] md:py-2 py-1 md:px-3 px-2 bg-[var(--main-color)] text-white font-semibold duration-300 rounded-r-lg -ml-8">
          Subscribe{" "}
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
