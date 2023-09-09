const NewsSection = () => {
  return (
    // bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1571103189706-cd54b23e81f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]
    <section className="section-container w-auto h-full text-center bg-opacity-50 bg-green-100/20 ">
     <div className="">
     <h1 className="section-title">Subscribe To Our Newsletter</h1>
      <p className="about-para">
        {" "}
        for our newsletter to get the latest news and updates about our upcoming
        events and classes{" "}
      </p>
      <div className="flex items-center justify-center mt-5 flex-col gap-y-4 md:flex-row">
        <input
          type="text"
          placeholder="Email Address"
          className="py-2 px-3 rounded-lg outline-none border-2 border-[var(--main-color)] md:w-full max-w-xs "
        /> 
        <button className="@apply rounded-md  border-2 border-[var(--main-color)] md:py-2 py-1 md:px-3 px-2 bg-[var(--main-color)] text-white font-semibold duration-300 md:rounded-r-lg md:-ml-8">
          Subscribe{" "}
        </button>
      </div>
     </div>
    </section>
  );
};

export default NewsSection;
