import { Rating } from "@smastrom/react-rating";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews";
import InstructorDetails from "../InstructorDetails";
import { AuthContext } from "../../../Providers/AuthProvider";

const SingleClass = () => {
  const [singleClass, setSingleClass] = useState({});
  const [instructorData, setInstructorData] = useState({});
  const { user } = useContext(AuthContext);
  const { url } = useParams();

  const {
    // _id,
    name,
    description,
    // img,
    days,
    fees,
    duration,
    schedule,
    location,
    level,
    time,
    max_students,
    // class_size,
    // class_type,
    instructor,
    ratings,
    reviews,
  } = singleClass;

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/classes.json");
      const data = await res.json();
      if (data) {
        const matched = data.find((item) => item.url === url);
        setSingleClass(matched);
      }
    };

    loadData();
  }, [url]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/instructors.json");
      const data = await res.json();
      if (data && instructor?.email) {
        const matched = data.find((item) => item?.email === instructor?.email);
        setInstructorData(matched);
      }
    };

    instructor?.email && loadData();
  }, [instructor]);

  console.log(singleClass);

  const total = instructorData?.reviews?.reduce(
    (initial, item) => initial + item.rating,
    0
  );

  const instructorRating = total / instructorData?.reviews?.length;

  const handleEnrollClass = async (id) => {
    const bookingInfo = {
      displayName: user.displayName,
      email: user.email,
      classId: id,
    }
    const res = await fetch("https://yoga.asdfrajkumar112.repl.co/booking/create-booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookingInfo)
    });
    console.log(await res.json())
  }

  return (
    <section className="">
      <div className="md:flex gap-2 md:min-h-[80vh] relative rounded overflow-hidden">
        <img
          // src={img}
          src={
            "https://images.pexels.com/photos/18221637/pexels-photo-18221637/free-photo-of-young-woman-standing-on-one-leg-on-mountain-in-rishikesh-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="w-full h-full object-cover rounded absolute"
        />
        <div className="bg-black h-full w-full rounded absolute bg-opacity-10">
          <p className="bg-[var(--main-color)] absolute bottom-3 right-3 py-1 px-2 rounded font-bold text-[var(--secondary-color)] z-10 ">
            level: <span className="font-bold">{level}</span>
          </p>
        </div>
        <div className="flex-1 rounded-l bg-[#644b76] cutom-shape md:p-10 p-3 bg-opacity-80 text-slate-200 space-y-2 flex flex-col">
          <h3 className="md:text-5xl text-3xl font-bold text-[var(--main-color)] mb-1">
            {name}
          </h3>
          <div className="grow space-y-1">
            <p className="pr-10 text-justify text-lg mb-2">{description}</p>
            <div className="pt-8">
              <p>
                <span className="font-bold">Duration : </span> {duration}
              </p>
              <div className="font-bold flex md:flex-row flex-col gap-2">
                <span className="inline-block">Class Days :</span>
                <div className="flex gap-2 flex-wrap w-3/4 pr-5">
                  {days?.map((day) => (
                    <span
                      key={day}
                      className="bg-[var(--main-color)] p-1 rounded text-[var(--secondary-color)]"
                    >
                      {day}
                    </span>
                  ))}
                </div>
                {schedule}
              </div>
              <p className="font-bold">
                <span>Time : </span>
                {time}
              </p>
              <p className="font-bold">
                <span>Maximum students : </span>
                {max_students}
              </p>
              <p className="font-bold">
                <span>Location : </span> {location}
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
            <button className="custom-btn-primary mt-5" onClick={() => handleEnrollClass(singleClass._id)}>Enroll Now</button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>

      <InstructorDetails instructorData={instructorData} ratings={ratings} />

      {/* <hr className="border-1 border-[var(--secondary-color)]" /> */}
      {/*feedback area */}
      <div className="w-full bg-slate-200 section-container">
        <h3 className="text-2xl font-bold mb-3">Write a review:</h3>
        <div className="flex md:w-1/2 w-full flex-col gap-2">
          <div className="w-full grow">
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
              className="w-full border-2 border-[var(--main-color)] outline-none md:w-full rounded p-2 mt-2"
            ></textarea>
          </div>
          <button className="bg-[var(--main-color)] w-fit text-white py-1 px-2 rounded h-fit mb-2">
            Post
          </button>
        </div>
        {/* Reviews area */}
        <Reviews reviews={reviews} />
      </div>
    </section>
  );
};

export default SingleClass;
