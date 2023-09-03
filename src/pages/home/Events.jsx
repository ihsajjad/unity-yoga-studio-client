// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvent = () => {
      fetch("events.json")
        .then((res) => res.json())
        .then((data) => setEvents(data));
    };
    loadEvent();
  }, []);

  return (
    <section className="bg-[var(--primary-bg)] md:p-10 px-2 py-5">
      <h3 className="text-3xl text-center text-[var(--main-color)] font-bold my-5">
        Upcomming Events
      </h3>

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
          <SwiperSlide key={i} className="">
            <div className="relative h-[90vh] w-full overflow-hidden">
              <div className="h-full w-full">
                <img
                  src={event.image}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="absolute z-10 top-0 left-auto bg-opacity-40 bg-slate-800 h-full w-full flex items-center">
                <div className="h-fit w-1/2 mx-auto md:p-10 p-5  rounded-lg bg-opacity-10 text-white space-y-2 bg-gradient-to-b from-purple-800 text-center">
                  <h3 className="text-3xl text-[var(--main-color)] font-bold text-center">
                    {event.name}
                  </h3>
                  <p className=" text-center">{event.description}</p>
                  <Link to={`/${event.url}`}>View Schedule</Link>
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
