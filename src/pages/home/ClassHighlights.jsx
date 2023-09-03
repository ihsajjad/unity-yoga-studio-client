import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ClassHighlights = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <section className="bg-[var(--primary-bg)] md:p-10 px-2 py-5">
      <h3 className="text-3xl text-center text-[var(--main-color)] font-bold my-5">
        Our Popular Classes
      </h3>
      <div className="grid md:grid-cols-3 md:gap-10 gap-3">
        {classes.map((singleClass) => (
          <div
            key={singleClass._id}
            className="border border-[var(--main-color)] md:p-5 p-2 rounded-lg bg-white flex flex-col"
          >
            <div className="relative">
              <figure>
                <img
                  src={singleClass.img}
                  alt=""
                  className="object-cover rounded-lg"
                />
              </figure>
              <span className="bg-[var(--main-color)] text-[var(--primary-bg)] font-bold py-1 px-2 rounded absolute bottom-3 right-3">
                Fees: ${singleClass.fees}
              </span>
            </div>
            <h4 className="text-2xl font-semibold my-2">{singleClass.name}</h4>
            <p className="pb-2 text-justify">{singleClass.description}</p>
            {/* Card footer */}
            <div className="flex justify-between mt-auto border-t-2 border-[var(--main-color)] pt-2">
              {/* ratings */}
              <div className="flex gap-2 items-center justify-center">
                <span>
                  <Rating
                    style={{ maxWidth: 140 }}
                    value={singleClass.ratings}
                    readOnly
                  />
                </span>
                <span className="text-xl">{singleClass.ratings}/5</span>
              </div>
              <Link to={singleClass.url}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassHighlights;
