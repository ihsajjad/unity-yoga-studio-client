import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import img_bg from "../../assets/img-bg.svg";
import instructor_img from "../../assets/image-removebg-preview.png";
import { FaQuoteLeft } from "react-icons/fa";

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

  const total = instructorData?.reviews?.reduce(
    (initial, item) => initial + item.rating,
    0
  );

  const instructorRating = total / instructorData?.reviews?.length;
  console.log(instructorData);
  return (
    <section className="section-container space-y-10">
      <div className={`flex gap-2 min-h-[80vh] relative rounded`}>
        <img
          // src={img}
          src={
            "https://images.pexels.com/photos/18221637/pexels-photo-18221637/free-photo-of-young-woman-standing-on-one-leg-on-mountain-in-rishikesh-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="w-full h-full object-cover rounded absolute"
        />
        <div className="bg-black h-full w-full rounded absolute bg-opacity-10">
          <p className="bg-[var(--main-color)] absolute bottom-3 right-3 py-1 px-2 rounded font-bold text-[var(--secondary-color)]">
            level: <span className="font-bold">{level}</span>
          </p>
        </div>
        <div className="flex-1 rounded-l bg-[#644b76] cutom-shape p-10 bg-opacity-80 text-slate-200 space-y-2 flex flex-col">
          <h3 className="text-5xl font-bold text-[var(--main-color)] mb-1">
            {name}
          </h3>
          <div className="grow space-y-1">
            <p className="pr-10 text-justify text-lg mb-2">{description}</p>
            <div className="pt-8">
              <p>
                <span className="font-bold">Duration : </span> {duration}
              </p>
              <p>
                <span className="font-bold">Schedule : </span> {schedule}
              </p>
              <p>
                <span className="font-bold">Maximum students : </span>
                {max_students}
              </p>
              <p>
                <span className="font-bold">Location : </span> {location}
              </p>
            </div>
          </div>

          <div>
            <p className=" text-[var(--main-color)] w-fit text-lg font-bold py-1 px-2 rounded">
              {" "}
              Fees: ${fees}
            </p>
            <div className="flex gap-2">
              <Rating
                value={instructorRating}
                readOnly
                style={{ maxWidth: "120px" }}
              />{" "}
              <span className="text-[var(--main-color)] font-bold">
                {instructorRating}/5
              </span>
            </div>
            <button className="custom-btn-primary mt-5">Enroll Now</button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="h-[75vh]">
        <h3 className="section-title mb-10">Instructor&apos;s Details</h3>
        <div className="flex relative items-center h-full ">
          <div className="flex-1 space-y-2">
            <p>
              <span className="font-bold">Name : </span>
              {instructorData.name}
            </p>
            <p>
              <span className="font-bold">Phone : </span>
              {instructorData.phone}
            </p>
            <p>
              <span className="font-bold">Email : </span>
              {instructorData.email}
            </p>
            <p>
              {" "}
              <span className="font-bold">Bio : </span>
              {instructorData.bio}
            </p>
            <div className="flex gap-2 mt-1">
              <Rating value={ratings} readOnly style={{ maxWidth: "120px" }} />{" "}
              <span className=" font-bold">{ratings}/5</span>
            </div>
            <p>{instructorData?.reviews?.length} reviews</p>
          </div>
          {/* instructor's img */}
          <div className="relative h-full flex-1">
            <img
              src={img_bg}
              alt=""
              className="absolute bottom-0 right-0 w-full h-full"
            />
            <img
              src={instructor_img}
              alt=""
              className="absolute bottom-0 right-0 w-full h-full"
            />
          </div>
          <div className="absolute top-0 left-1/3 w-1/4 rounded bg-slate-300 p-2 flex gap-2">
            <FaQuoteLeft className="w-24 text-2xl text-[var(--secondary-color)] text-justify" />
            <p className=" text-[var(--secondary-color)]  rounded">
              {instructorData.teaching_philosophy}
            </p>
          </div>
        </div>
      </div>

      {/* <hr className="border-1 border-[var(--secondary-color)]" /> */}
      {/*feedback area */}
      <div className=" pt-5">
        <h3 className="text-2xl  font-bold mb-3">Write a review:</h3>
        <div className="w-1/2 flex gap-2 items-end">
          <div className=" grow">
            <Rating
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              fractions={2}
              style={{ maxWidth: "120px" }}
            />
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Your feedback..."
              rows="4"
              className="border-2 border-[var(--main-color)] outline-none md:w-full rounded p-2 mt-2"
            ></textarea>
          </div>
          <button className="bg-[var(--main-color)] text-white py-1 px-2 rounded h-fit mb-2">
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
