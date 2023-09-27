import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  console.log(classes);
  return (
    <section className="section-container bg-[#E5EAE6] mt-10">
      <h2 className="section-title">Our Classes</h2>
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
            </div>
            <h4 className="text-2xl font-semibold my-2">{singleClass.name}</h4>
            <p className="pb-2 text-justify">{singleClass.description}</p>
            {/* Card footer */}
            <div className="flex justify-center mt-auto border-t-2 border-[var(--main-color)] pt-2">
              <Link
                to={`/class/${singleClass.url}`}
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

export default Classes;
