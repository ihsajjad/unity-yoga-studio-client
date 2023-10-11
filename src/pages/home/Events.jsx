// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvent = () => {
      // fetch("events.json")
      fetch("https://yoga.asdfrajkumar112.repl.co/event/show-events")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    };
    loadEvent();
  }, []);

  return (
    <section className="bg-[var(--primary-bg)] section-container">
      <h3 className="section-title">Upcoming Events</h3>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {events.map((event, i) => (
          <SwiperSlide key={i} className="pb-12">
            <div className="relative h-[90vh] w-full ">
              <div className="h-full w-full ">
                <img
                  src={event.image}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="absolute z-10 top-0 left-auto bg-opacity-0 bg-slate-800 h-full w-full flex items-center">
                {/* slider content */}
                <div className="h-fit lg:w-2/4 md:w-3/4 mx-auto md:p-10 p-5 bg-slate-800 bg-opacity-60 text-white text-center flex flex-col space-y-3 relative rounded">
                  <h3 className="md:text-4xl text-3xl text-center text-[var(--main-color)] font-bold">
                    {event.name}
                  </h3>
                  <p className="md:text-xl text-center font-bold">
                    {event.description}
                  </p>
                  <div className="font-bold text-yellow-300 py-1 px-2 rounded flex items-center gap-1 justify-center">
                    <span>
                      <FaCalendarCheck className="text-xl" />
                    </span>
                    {event.date}
                  </div>
                  <div>
                    <Link to={`/${event.url}`} className="custom-btn-primary">
                      View Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;
