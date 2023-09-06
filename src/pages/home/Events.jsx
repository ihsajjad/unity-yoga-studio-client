// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
    <section className="h-auto bg-[var(--primary-bg)] md:p-10 px-2 py-5">
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
        className="mySwiper min-h-screen"
      >
        {events.map((event, i) => (
          <SwiperSlide key={i} className="">
            <div className="relative h-[80vh] w-full overflow-hidden">
              <div className="h-full w-full">
                <img
                  src={event.image}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="absolute z-10 top-0 left-auto bg-opacity-20 bg-slate-800 h-full w-full flex items-center">
                <div className="h-fit md:p-10 p-5 md:mx-10 rounded-lg border-[var(--main-color)] bg-opacity-20 text-white space-y-2 bg-gradient-to-r from-[var(--bg-secondary)]">
                  <h3 className="text-3xl text-[var(--main-color)] font-bold">
                    {event.title}
                  </h3>
                  <h3 className="text-xl">{event.subtitle}</h3>
                  <p className="md:w-1/2 text-justify">{event.description}</p>
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
