const About = () => {
  return (
    <section className="">
      <div className="py-16 md:py-20 lg:py-28 mx-5 md:mx-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center ">
          About Us{" "}
        </h2>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src={
                    "https://s37280.pcdn.co/wp-content/uploads/2019/09/about-adriene-1024x1024.jpg"
                  }
                  alt="about image"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Unity Yoga Studio
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    At Unity Yoga Studio, we believe in the transformative power
                    of yoga to bring balance, harmony, and unity to the body,
                    mind, and soul. Our philosophy is rooted in the ancient
                    wisdom of yoga, which teaches that yoga is not just a
                    physical practice but a path to holistic well-being.
                  </p>
                  <p className="text-base mt-7 font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    Our mission is to create a welcoming and inclusive space
                    where individuals of all backgrounds and abilities can
                    explore and deepen their yoga practice. We aim to inspire
                    and empower our community to lead healthier, more balanced
                    lives through the practice of yoga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 lg:py-28 mx-5 md:mx-32">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-5">
                  <h3 className="mb-4 text-lg font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
                    Unity
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    We embrace diversity and foster a sense of unity within our
                    yoga community.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
                    Mindfulness
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    We encourage mindfulness both on and off the mat, promoting
                    selfawareness and presence.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className=" text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
                    Compassion
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    We approach our practice and interactions with compassion
                    and kindness.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
                    Empowerment
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    We empower individuals to take control of their physical and
                    mental wellbeing through yoga.
                  </p>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-lg">
                    Continuous Learning
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-base sm:leading-relaxed">
                    We are committed to ongoing learning and growth in our
                    practice
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <img
                  src={
                    "https://s37280.pcdn.co/wp-content/uploads/2019/09/find-what-feels-good-1024x1024.jpg"
                  }
                  alt="about image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
