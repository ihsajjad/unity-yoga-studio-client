import { useEffect, useState } from "react";
import Calendar from "../Calendar";
import ClassList from "../ClassList";
import ClassDetails from "../ClassDetails";
import Heading from "../Heading";

const Schedule = () => {
  const [day, setDay] = useState("MON");
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState(2);
  const [classDetails, setClassDetails] = useState({});

  //Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("classes.json");
      const data = await res.json();
      const filteredClasses = data.filter((Class) => {
        return Class.days.includes(day);
      });
      setClasses(filteredClasses);
      setClassDetails(filteredClasses[classId - 1]);
    };
    fetchData();
  }, [day, classId]);

  return (
    <section className="pt-16 pb-12">
      {/* Upper Heading */}
      <Heading />
      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col sm:flex-row">
          {/* Weekly Calendar */}
          <Calendar setDay={setDay} />
          {/* List of Classes */}
          <ClassList setClassId={setClassId} classes={classes} />
        </div>
        {/* Class Details */}
        <ClassDetails classDetails={classDetails} />
      </section>
    </section>
  );
};

export default Schedule;
