import { useEffect } from "react";
import { useState } from "react";
import {
  MdDriveFileRenameOutline,
  MdOutlineDescription,
  MdDelete,
} from "react-icons/md";
import { BsFillImageFill, BsFillPersonFill } from "react-icons/bs";
import { FaRupeeSign, FaCalendarWeek, FaEdit } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";
import { img_hosting_URL } from "../../SignUp/SignUp";

const AddClass = () => {
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [days, setDays] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [response, setResponse] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [classData, setClassData] = useState({
    name: "",
    description: "",
    fees: "",
    duration: "",
    level: "Beginner",
    days: [],
    time: "",
    instructor: "",
    url: "",
    max_students: 0,
    img: "",
  });

  /* Handling Select Day */
  const handleSelectDays = (day) => {
    if (days.includes(day)) {
      const result = days.filter((item) => item !== day);

      setDays(result);
    } else {
      setDays((p) => [...p, day]);
    }
  };
  classData.days = days;

  /* Fetching Instructors */
  useEffect(() => {
    const fetchInstructor = async () => {
      const res = await fetch(
        "https://yoga.asdfrajkumar112.repl.co/instructor/show-instructors"
      );
      const fetchedInstructors = await res.json();
      setInstructors(fetchedInstructors);
    };
    fetchInstructor();
  }, []);

  /* Fetching Classes */
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch(
        "https://yoga.asdfrajkumar112.repl.co/class/show-classes"
      );
      const fetchedClasses = await res.json();
      setClasses(fetchedClasses);
    };
    fetchClasses();
  }, [refetch]);

  /* Handling Change value of Input Fields */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setClassData({ ...classData, [name]: value });
  };

  /* Select Update Mode */
  const selectUpdateModeClass = async (url) => {
    const res = await fetch(
      `https://yoga.asdfrajkumar112.repl.co/class/show-class/${url}`
    );
    const data = await res.json();
    const { days } = data;

    if (days) {
      // setDays(JSON.parse(days));
      setDays(days);
      setClassData(data);
    }
    // classData.days = pre;
    setIsUpdateMode(true);
  };

  // uploading image to get the url
  const handlePhotoUpload = async (file) => {
    // Create FormData and append the image file
    const formData = new FormData();
    formData.append("image", file);

    // Upload the image to imgBB
    const imgResponse = await fetch(img_hosting_URL, {
      method: "POST",
      body: formData,
    });

    if (imgResponse.ok) {
      const { data } = await imgResponse.json();
      // setPhotoURL(data.display_url);
      classData.img = data.display_url;
    } else {
      console.error("Image upload failed.");
    }
  };

  /* Handling Add a New Class */
  const handleAddClass = async (e) => {
    e.preventDefault();
    const classURL = classData.name.toLocaleLowerCase().split(" ").join("-");
    classData.url = classURL;

    const res = await fetch(
      "https://yoga.asdfrajkumar112.repl.co/class/create-class",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(classData),
      }
    );
    const data = await res.json();
    setResponse(data.message);
    setRefetch((p) => !p);
  };

  /* Handling Upddate a Class */
  const handleUpdateClass = async (e) => {
    e.preventDefault();
    const classURL = classData.name.toLocaleLowerCase().split(" ").join("-");
    classData.url = classURL;

    const res = await fetch(
      `https://yoga.asdfrajkumar112.repl.co/class/update-class/${classData.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classData),
      }
    );
    const data = await res.json();
    setResponse(data.message);
    setRefetch((p) => !p);
  };

  /* Handling Deleting a Class */
  const handleDeleteClass = async (id) => {
    const res = await fetch(
      `https://yoga.asdfrajkumar112.repl.co/class/delete-class/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    if (data) {
      setRefetch((p) => !p);
    }
  };

  return (
    <section className="w-full flex items-center md:items-start gap-4 flex-col md:flex-row">
      {/* Form Side Starts Here */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center md:text-4xl text-3xl text-[var(--secondary-color)] font-bold">
          {isUpdateMode ? "Update" : "Add"} Class
        </h1>

        {isUpdateMode && (
          <button
            onClick={() => setIsUpdateMode(false)}
            className="bg-[var(--secondary-color)] rounded-lg text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1 self-center"
          >
            Add Class
          </button>
        )}
        <div>
          <form
            className="flex flex-col gap-8"
            onSubmit={isUpdateMode ? handleUpdateClass : handleAddClass}
          >
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                <MdDriveFileRenameOutline />
                Class Name
              </span>
              <input
                className="outline-none border-b-2 border-[var(--secondary-color)]"
                type="text"
                placeholder="Enter Class Name"
                name="name"
                defaultValue={classData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                <MdOutlineDescription />
                Description
              </span>
              <textarea
                className="outline-none border-2 border-[var(--secondary-color)] p-2 rounded-sm"
                type="text"
                placeholder="Type Here..."
                rows="5"
                name="description"
                defaultValue={classData.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                <BsFillImageFill />
                Image :
              </span>
              <input
                className="w-[20rem] outline-none border-b-2 border-[var(--secondary-color)] file-input file-input-bordered file-input-primary"
                type="file"
                onChange={(e) => handlePhotoUpload(e.target.files[0])}
                placeholder="Class Image Link"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                Duration :
              </span>
              <input
                className="outline-none border-b-2 border-[var(--secondary-color)]"
                type="text"
                placeholder="Enter Course Duration"
                name="duration"
                defaultValue={classData.duration}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                Maximum Students :
              </span>
              <input
                type="number"
                placeholder="In Rupee"
                className="outline-none border-b-2 border-[var(--secondary-color)] w-[20rem]"
                name="max_students"
                value={classData.max_students}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                Level :
              </span>
              <select
                name=""
                id=""
                value={classData.level}
                onChange={(e) =>
                  setClassData((p) => ({ ...p, level: e.target.value }))
                }
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1">
                <FaRupeeSign />
                Fees
              </span>
              <input
                type="number"
                placeholder="In Rupee"
                className="outline-none border-b-2 border-[var(--secondary-color)] w-[20rem]"
                name="fees"
                defaultValue={classData.fees}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-xl flex items-center gap-1">
                <FaCalendarWeek />
                Days:{" "}
              </span>
              {dayList.map((day, i) => {
                return (
                  <label className="flex items-center gap-1" key={i}>
                    <input
                      onChange={() => handleSelectDays(day)}
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={classData.days && classData.days?.includes(day)}
                    />
                    {day}
                  </label>
                );
              })}
            </div>
            <div>
              <span className="font-bold text-xl flex items-center gap-1">
                <BiTime />
                Time:{" "}
              </span>
              <input
                type="text"
                placeholder=""
                className="outline-none border-b-2 border-[var(--secondary-color)]"
                name="time"
                defaultValue={classData?.time}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-xl flex items-center gap-1">
                <BsFillPersonFill />
                Instructor:
              </span>
              {instructors.map((instructor) => {
                return (
                  <div className="flex items-center gap-1" key={instructor.id}>
                    <input
                      type="radio"
                      name="instructor"
                      id={instructor.id}
                      value={instructor.name}
                      className="radio radio-primary"
                      onChange={handleChange}
                      checked={classData?.instructor == instructor?.name}
                    />
                    <label htmlFor={instructor.id}>{instructor.name}</label>
                  </div>
                );
              })}
            </div>
            {response && (
              <span
                className={`${
                  response.includes("successfully")
                    ? "text-green-500"
                    : "text-red-500"
                } font-bold`}
              >
                {response}
              </span>
            )}
            <button
              className="custom-btn-secondary w-40 self-center"
              type="submit"
            >
              {isUpdateMode ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
      {/* Form Side Ends Here */}

      {/* Classes Section Starts Here */}
      <div className="h-auto w-80 px-4 flex flex-col items-center gap-2">
        {classes.length > 0 &&
          classes?.map((Class, i) => {
            return (
              <div
                key={i}
                className="w-[20rem] border-2 border-[var(--secondary-color)] rounded-md p-2"
              >
                <img src={Class.img} alt="" className="h-48 w-full rounded" />
                <h2 className="text-xl font-bold">{Class.name}</h2>
                <p className="">
                  {" "}
                  {Class?.description?.slice(0, 30)}
                  {Class?.description?.length > 30 && "..."}
                </p>
                <div className="flex items-center justify-end gap-2">
                  <Link
                    to={`/class/${Class.url}`}
                    className="bg-[var(--secondary-color)] rounded-md text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1"
                  >
                    View Details
                  </Link>
                  <FaEdit
                    onClick={() => selectUpdateModeClass(Class.url)}
                    size={32}
                    className="cursor-pointer text-green-700 hover:text-[var(--secondary-color)]"
                  />
                  <MdDelete
                    onClick={() => handleDeleteClass(Class.id)}
                    size={32}
                    className="cursor-pointer text-red-700 hover:text-[var(--secondary-color)]"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default AddClass;
