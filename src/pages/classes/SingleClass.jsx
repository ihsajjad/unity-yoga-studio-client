import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import img_bg from "../../assets/img-bg.svg";
import instructor_img from "../../assets/image-removebg-preview.png";

const SingleClass = () => {
  const [singleClass, setSingleClass] = useState({});
  const [instructorData, setInstructorData] = useState({});
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
    instructor,
    ratings,
    reviews,
  } = singleClass;

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setSingleClass(data[0]));
  }, []);

  useEffect(() => {
    fetch("instructors.json")
      .then((res) => res.json())
      .then((data) => {
        if (data && instructor?.email) {
          const matched = data.find(
            (item) => item?.email === instructor?.email
          );
          setInstructorData(matched);
        }
      });
  }, [instructor]);

  console.log(instructorData);

  return (
    <section className="section-container space-y-10">
      <div className={`flex gap-2 min-h-[80vh] relative rounded`}>
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded absolute"
        />
        <div className="bg-black h-full w-full rounded absolute bg-opacity-30"></div>
        <div className="flex-1 rounded-l cutom-shape p-10 bg-opacity-10">
          <h3 className="text-2xl font-bold text-[var(--secondary-color)] mb-3">
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
        <div className="flex-1"></div>
      </div>

      {/* Instructor's data */}
      <div>
        <h3 className="text-2xl font-bold text-[var(--main-color)] mb-3">
          Trainer
        </h3>
        <div>
          <p>{instructorData.name}</p>
          <p>{instructorData.phone}</p>
          <p>{instructorData.email}</p>
          <p>{instructorData.teaching_philosophy}</p>
        </div>
        <div className="relative">
          <div className="message-bg w-56 h-40 "></div>
          <img src={img_bg} alt="" />
          <img src={instructor_img} alt="" className="absolute top-0 left-0" />
        </div>
      </div>

      {/*feedback area */}
      <div>
        <h3 className="text-2xl font-bold mb-3">Write a review:</h3>
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
