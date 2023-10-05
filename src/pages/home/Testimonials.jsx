import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadTestimonials = () => {
      fetch("testimonials.json")
        .then((res) => res.json())
        .then((data) => setTestimonials(data));
    };

    loadTestimonials();
  }, []);

  return (
    <section className="section-container">
      <h3 className="section-title">Testimonials</h3>
      <div className="flex gap-5">
        <Marquee className="" autoFill>
          <div className="flex overflow-hidden">
            {testimonials.map((testimonail) => (
              <div
                key={testimonail._id}
                className="h-[400px] space-y-3 flex flex-col items-center border border-[var(--secondary-color)] p-5 mx-5 bg-[var(--primary-bg)] rounded-lg shadow-lg shadow-[#5d5db85c] w-[320px]"
              >
                <img
                  src={testimonail.image}
                  alt=""
                  className="h-28 w-28 rounded-full border-4 border-[var(--main-color)]"
                />
                <h4 className="font-semibold">{testimonail.name}</h4>
                <div className="w-full grow flex gap-2">
                  <FaQuoteLeft className="w-24 text-2xl text-[var(--main-color)]" />
                  <p className="text-justify"> {testimonail.quote}</p>
                </div>
                <span className=" h-fit text-[var(--secondary-color)] font-bold ">
                  {testimonail.date}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
/*  */
export default Testimonials;
