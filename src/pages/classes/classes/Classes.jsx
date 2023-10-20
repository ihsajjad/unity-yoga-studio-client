import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [matchedClasses, setMatchedClasses] = useState([]);
  const [className, setClassName] = useState("");
  const [level, setLevel] = useState("All");

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  useEffect(() => {
    setMatchedClasses(classes);
  }, [classes]);

  useEffect(() => {
    const result = classes.filter((item) => {
      if (item?.name?.toLowerCase().includes(className)) {
        return item;
      }
    });
    setMatchedClasses(result);
  }, [className]);

  useEffect(() => {
    // let result;
    if (level === "All") {
      setMatchedClasses(classes);
    } else {
      let result = classes.filter((item) => item?.level == level);
      setMatchedClasses(result);
    }
  }, [level, classes]);

  return (
    <section className="section-container bg-[#E5EAE6]">
      <h2 className="section-title">Our Classes</h2>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-2 justify-between mb-5 px-3">
        <div className="flex lg:flex-row flex-col flex-1 gap-1">
          <span className="font-bold">Sort By Name : </span>
          <input
            type="text"
            placeholder="Search by Name"
            onChange={(e) => setClassName(e.target.value)}
            className="border border-[var(--secondary-color)] outline-none py-1 px-3 w-[200px] rounded-lg"
          />
        </div>
        <div className="flex lg:flex-row flex-col flex-1 gap-1">
          <span className="font-bold">Sort By Level : </span>
          <select
            name=""
            id=""
            defaultValue="All"
            onChange={(e) => setLevel(e.target.value)}
            className="border border-[var(--secondary-color)] outline-none py-1 px-3 rounded-lg w-[200px]"
          >
            <option value="All">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
          </select>
        </div>
        <div className="flex lg:flex-row flex-col flex-1 gap-1">
          <span className="font-bold">Sort By Duration : </span>
          <select
            name=""
            id=""
            className="border border-[var(--secondary-color)] outline-none py-1 px-3 rounded-lg w-[200px]"
          >
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="350">350</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 p-2">
        {matchedClasses.map((singleClass) => (
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
