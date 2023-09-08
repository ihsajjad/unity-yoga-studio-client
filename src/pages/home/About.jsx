const About = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">About Us </h2>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-10 gap-5 mb-10">
        <div className="flex-1" data-wow-delay=".15s">
          <img
            src={
              "https://images.pexels.com/photos/8436402/pexels-photo-8436402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="about image"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-4 text-xl md:text-2xl font-bold">
            Unity Yoga Studio
          </h3>
          <p className="about-para mb-4 text-justify">
            At Unity Yoga Studio, we believe in the transformative power of yoga
            to bring balance, harmony, and unity to the body, mind, and soul.
            Our philosophy is rooted in the ancient wisdom of yoga, which
            teaches that yoga is not just a physical practice but a path to
            holistic well-being.
          </p>
          <p className="about-para text-justify">
            Our mission is to create a welcoming and inclusive space where
            individuals of all backgrounds and abilities can explore and deepen
            their yoga practice. We aim to inspire and empower our community to
            lead healthier, more balanced lives through the practice of yoga.
          </p>
        </div>
      </div>
      {/* second section */}
      <div className="flex md:flex-row flex-col-reverse items-start justify-between md:gap-10">
        <div className="flex-1 space-y-3" data-wow-delay=".2s">
          <h3 className="mb-4 text-xl md:text-2xl font-bold">
            Journey of Continuous Learning
          </h3>
          <div>
            <h3 className="about-para-title">Unity</h3>
            <p className="about-para">
              We embrace diversity and foster a sense of unity within our yoga
              community.
            </p>
          </div>
          <div>
            <h3 className="about-para-title">Mindfulness</h3>
            <p className="about-para">
              We encourage mindfulness both on and off the mat, promoting
              selfawareness and presence.
            </p>
          </div>
          <div>
            <h3 className="about-para-title">Compassion</h3>
            <p className="about-para">
              We approach our practice and interactions with compassion and
              kindness.
            </p>
          </div>
          <div>
            <h3 className="about-para-title">Empowerment</h3>
            <p className="about-para">
              We empower individuals to take control of their physical and
              mental wellbeing through yoga.
            </p>
          </div>
          <div>
            <h3 className="about-para-title">Continuous Learning</h3>
            <p className="about-para">
              We are committed to ongoing learning and growth in our practice
            </p>
          </div>
        </div>
        <div className="flex-1" data-wow-delay=".15s">
          <img
            src={
              "https://images.pexels.com/photos/8436464/pexels-photo-8436464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="about image"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
