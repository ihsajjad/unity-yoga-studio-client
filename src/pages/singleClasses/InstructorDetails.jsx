import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

const InstructorDetails = ({ instructorData, ratings }) => {
  return (
    <div className="min-h-[85vh] w-screen p-3 overflow-hidden">
      <h3 className="section-title mb-10">Instructor&apos;s Details</h3>
      <div className="flex md:flex-row flex-col-reverse relative items-center h-full ">
        <div className="flex-1 h-fit space-y-2">
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
        <div
          className={`relative bg-[url(https://svgshare.com/i/xwk.svg)] bg-cover bg-no-repeat overflow-hidden md:flex-1 w-full  flex items-center justify-center h-fit`}
          id="instructor-img-container"
        >
          <img src={instructorData.image} alt="" className=" object-cover" />
        </div>
        <div className="md:absolute top-0 left-1/3 md:w-1/4 rounded bg-slate-300 p-2 flex gap-2 mb-3">
          <FaQuoteLeft className="w-24 text-2xl text-[var(--secondary-color)] text-justify" />
          <p className=" text-[var(--secondary-color)]  rounded">
            {instructorData.teaching_philosophy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
