import { useEffect } from "react";
import { useState } from "react";
import { MdDriveFileRenameOutline, MdOutlineDescription, MdDelete } from "react-icons/md"
import { BsFillImageFill, BsFillPersonFill } from "react-icons/bs"
import { FaRupeeSign, FaCalendarWeek, FaEdit } from "react-icons/fa"
import { BiTime } from "react-icons/bi"
import { useNavigate } from "react-router-dom";


const AddClass = () => {

  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const navigate = useNavigate();
  const [days, setDays] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [classData, setClassData] = useState({
    name: null,
    description: null,
    fees: null,
    time: null,
    days: [],
    instructor: null
  })

  /* Handling Select Day */
  const handleSelectDays = (day) => {
    if (days.includes(day)) {
      const index = days.indexOf(day);
      if (index > -1) {
        setDays((prev) => prev.splice(index, 1));
      }
    } else {
      setDays([...days, day])
    }
    setClassData({ ...classData, days })
  }

  /* Fetching Instructors */
  useEffect(() => {
    const fetchInstructor = async () => {
      const res = await fetch("/instructors.json");
      const fetchedInstructors = await res.json();
      setInstructors(fetchedInstructors);
    }
    fetchInstructor();
  }, [instructors])

  /* Fetching Classes */
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch("/classes.json");
      const fetchedClasses = await res.json();
      setClasses(fetchedClasses);
    }
    fetchClasses();
  }, [classes])

  /* Handling Change value of Input Fields */
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setClassData({ ...classData, [name]: value })
  }

  /* Select Update Mode */
  const selectUpdateModeClass = async (id) => {
    setIsUpdateMode(true);
    const foundClass = classes.find(Class => Class._id === id);
    setClassData(foundClass);
  }

  /* Handling Add a New Class */
  const handleAddClass = async () => { }

  /* Handling Upddate a Class */
  const handleUpdateClass = async (id) => { }

  /* Handling Deleting a Class */
  const handleDeleteClass = async (id) => { }

  return (
    <section className="w-full flex items-center md:items-start gap-4 flex-col md:flex-row">
      {/* Form Side Starts Here */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center md:text-4xl text-3xl text-[var(--secondary-color)] font-bold">{isUpdateMode ? "Update" : "Add"} Class</h1>
        {
          isUpdateMode &&
          <button
            onClick={() => setIsUpdateMode(false)}
            className="bg-[var(--secondary-color)] rounded-lg text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1 self-center"
          >Add Class</button>
        }
        <div>
          <form
            className="flex flex-col gap-8"
            onSubmit={isUpdateMode ? handleUpdateClass : handleAddClass}
          >
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1"><MdDriveFileRenameOutline />Class Name</span>
              <input
                className="outline-none border-b-2 border-[var(--secondary-color)]"
                type="text"
                placeholder="Enter Class Name"
                name="name"
                value={classData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1"><MdOutlineDescription />Description</span>
              <textarea
                className="outline-none border-2 border-[var(--secondary-color)] p-2 rounded-sm"
                type="text"
                placeholder="Type Here..."
                rows="5"
                name="description"
                value={classData.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1"><BsFillImageFill />Image</span>
              <input
                className="w-[20rem] outline-none border-b-2 border-[var(--secondary-color)] file-input file-input-bordered file-input-primary"
                type="file"
                placeholder="Class Image Link"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xl flex items-center gap-1"><FaRupeeSign />Fees</span>
              <input
                type="number"
                placeholder="In Rupee"
                className="outline-none border-b-2 border-[var(--secondary-color)] w-[20rem]"
                name="fees"
                value={classData.fees}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-xl flex items-center gap-1"><FaCalendarWeek />Days: </span>
              {
                dayList.map((day, i) => {
                  return (
                    <label className="flex items-center gap-1" key={i}>
                      <input onChange={(e) => handleSelectDays(e.target.name)} name={day} type="checkbox" className="checkbox checkbox-primary" />{day}
                    </label>
                  )
                })
              }
            </div>
            <div>
              <span className="font-bold text-xl flex items-center gap-1"><BiTime />Time: </span>
              <input
                type="text"
                placeholder=""
                className="outline-none border-b-2 border-[var(--secondary-color)]"
                name="time"
                value={classData.time}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-xl flex items-center gap-1"><BsFillPersonFill />Instructor: </span>
              {
                instructors.map((instructor) => {
                  return (
                    <div className="flex items-center gap-1" key={instructor.id}>
                      <input
                        type="radio"
                        name="instructor"
                        id={instructor.id}
                        value={instructor.name}
                        className="radio radio-primary"
                        onChange={handleChange}
                      />
                      <label htmlFor={instructor.id}>{instructor.name}</label>
                    </div>
                  )
                })
              }
            </div>
            <button className="custom-btn-secondary w-40 self-center" type="submit">{isUpdateMode ? "Update" : "Add"}</button>
          </form>
        </div>
      </div>
      {/* Form Side Ends Here */}


      {/* Classes Section Starts Here */}
      <div className="h-auto w-80 px-4 flex flex-col items-center gap-2">
        {
          classes.map((Class) => {
            return (
              <div className="w-[20rem] border-2 border-[var(--secondary-color)] rounded-md p-2">
                <h2 className="text-xl font-bold">{Class.name}</h2>
                <p className="">{Class.description}</p>
                <div className="flex items-center justify-end gap-2">
                  <button onClick={() => navigate(`/class/${Class.url}`)} className="bg-[var(--secondary-color)] rounded-md text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1">View Details</button>
                  <FaEdit
                    onClick={() => selectUpdateModeClass(Class._id)}
                    size={32}
                    className="cursor-pointer text-green-700 hover:text-[var(--secondary-color)]" />
                  <MdDelete
                    onClick={() => handleDeleteClass(Class._id)}
                    size={32}
                    className="cursor-pointer text-red-700 hover:text-[var(--secondary-color)]" />
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default AddClass;
