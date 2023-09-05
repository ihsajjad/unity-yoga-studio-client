import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

// import required modules
import { Pagination } from "swiper/modules";

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
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <div>
          {testimonials.map((testimonail) => (
            <SwiperSlide key={testimonail._id} className="md:pb-12 pb-8">
              <div className="h-fit md:w-3/4 mx-auto space-y-3 flex flex-col items-center border border-[var(--main-color)] p-8 bg-[var(--primary-bg)] rounded-lg shadow-lg shadow-[#5d5db85c]">
                <img
                  src={testimonail.image}
                  alt=""
                  className="h-32 w-32 rounded-full border-4 border-[var(--main-color)]"
                />
                <h4 className="font-semibold">{testimonail.name}</h4>
                <div className="w-full flex gap-2">
                  <FaQuoteLeft className="w-24 text-2xl text-[var(--main-color)]" />
                  <p className="text-justify"> {testimonail.quote}</p>
                </div>
                <span>{testimonail.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
