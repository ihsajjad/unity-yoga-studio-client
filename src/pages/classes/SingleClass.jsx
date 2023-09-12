import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";

const SingleClass = () => {
  const [singleClass, setSingleClass] = useState({});
  const {
    _id,
    name,
    description,
    img,
    // date,
    fees,
    duration,
    schedule,
    location,
    level,
    max_students,
    // class_size,
    // class_type,
    // instructor,
    ratings,
    reviews,
  } = singleClass;

  console.log(reviews);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setSingleClass(data[0]));
  }, []);

  return (
    <section className="section-container space-y-10">
      <div className="flex lg:gap-10 md:gap-5 gap-2">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[var(--main-color)] mb-3">
            {name}
          </h3>
          <p>{description}</p>
          <p> Duration: {duration}</p>
          <p> schedule: {schedule}</p>
          <p> location: {location}</p>
          <p> level: {level}</p>
          <p> max_students: {max_students}</p>
          <p> ratings: {ratings}</p>
          <p> fees: ${fees}</p>
          <div className="flex gap-2">
            <Rating value={ratings} readOnly style={{ maxWidth: "120px" }} />{" "}
            <span>{ratings}/5</span>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      <div>
        <div className="w-full flex gap-2 items-end">
          <textarea
            name=""
            id=""
            cols="30"
            placeholder="Your feedback..."
            rows="4"
            className="border-2 border-[var(--main-color)] outline-none md:w-1/2 rounded p-2"
          ></textarea>
          <button className="bg-[var(--main-color)] text-white py-1 px-2 rounded h-fit">
            Post
          </button>
        </div>
      </div>

      {/* Reviews area */}
      <div>
        <h4 className="text-2xl font-bold">Reviews</h4>
        <div className="space-y-3">
          {reviews?.map((review, i) => (
            <div key={i}>
              <h5 className="font-bold">{review.user}</h5>
              <p>{review.comment}</p>{" "}
              <div className="flex gap-2">
                <Rating
                  value={review.rating}
                  readOnly
                  style={{ maxWidth: "120px" }}
                />{" "}
                <span>{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleClass;
