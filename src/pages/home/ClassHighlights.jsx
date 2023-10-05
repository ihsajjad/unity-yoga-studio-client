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
              <figure className="overflow-hidden rounded-lg relative">
                <img
                  src={singleClass.img}
                  alt=""
                  className="card-bg w-full h-56 object-cover rounded-lg "
                />
              </figure>
              <div className="w-28 h-28 absolute -bottom-12 rounded-full left-1/3 z-10 overflow-hidden border-4 border-white">
                <img
                  src={singleClass.instructor.imgUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-full absolute -z-10"
                />
                <div className="w-full h-full absolute bottom-28 text-center flex items-center justify-center text-[white] font-bold bg-[#644b76] bg-opacity-70 rounded-img-container duration-700">
                  <span className="">{singleClass.instructor.name}</span>
                </div>
              </div>
            </div>
            <h4 className="text-2xl font-semibold my-2 mt-12 text-center">
              {singleClass.name}
            </h4>
            <p className="pb-2 text-justify">{singleClass.description}</p>
            {/* Card footer */}
            <div className="flex justify-center mt-auto border-t-2 border-[var(--main-color)] pt-2">
              <Link
                to={`/classes/${singleClass.url}`}
                className="custom-btn-primary"
              >
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
