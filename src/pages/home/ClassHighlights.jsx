import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassHighlights = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <section className="bg-[var(--primary-bg)] section-container">
      <h3 className="md:text-4xl text-3xl text-center font-bold mb-5 md:mb-8 text-[var(--secondary-color)]">
        Our Popular Classes
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 p-2">
        {classes.map((singleClass) => (
          <div
            key={singleClass._id}
            className="border border-[var(--main-color)] p-5 rounded-lg bg-white flex flex-col shadow-lg shadow-slate-300 hover:shadow-[#8ccf17ac]  hover:scale-105 duration-300 class-card text-[var(--primary-text)]"
          >
            <div className="relative">
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={singleClass.img}
                  alt=""
                  className="w-full h-56 object-cover rounded-lg"
                />
              </figure>
              <span className="bg-[var(--main-color)] text-[var(--primary-bg)] font-bold py-1 px-2 rounded absolute bottom-3 right-3">
                Fees: ${singleClass.fees}
              </span>
            </div>
            <h4 className="text-2xl font-semibold my-2">{singleClass.name}</h4>
            <p className="pb-2 text-justify">{singleClass.description}</p>
            {/* Card footer */}
            <div className="flex justify-center mt-auto border-t-2 border-[var(--main-color)] pt-2">
              {/* ratings */}
              {/* <div className="flex gap-1 items-center justify-center">
                <div className="md:w-28 w-24">
                  <Rating value={singleClass.ratings} readOnly />
                </div>
                <span className="md:text-xl">{singleClass.ratings}/5</span>
              </div> */}

              <Link to={singleClass.url} className="custom-btn-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassHighlights;
