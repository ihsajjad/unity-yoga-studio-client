import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Calendar from '../Calendar'
import ClassList from '../ClassList'
import ClassDetails from '../ClassDetails'

const Schedule = () => {

  const [day, setDay] = useState("MON");
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState(2);
  const [classDetails, setClassDetails] = useState({});

  //Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("classes.json")
      const data = await res.json();
      const filteredClasses = data.filter((Class) => {
        return Class.days.includes(day)
      })
      setClasses(filteredClasses);
      setClassDetails(filteredClasses[classId - 1])
    }
    fetchData();
  }, [day, classId])


  return (
    <section className='pt-24'>
      {/* Upper Heading */}
      <Heading />
      <section className='section-container flex flex-col lg:flex-row items-center'>
        <div className='section-container flex flex-col sm:flex-row'>
          {/* Weekly Calendar */}
          <Calendar setDay={setDay} />
          {/* List of Classes */}
          <ClassList setClassId={setClassId} classes={classes} />
        </div>
        {/* Class Details */}
        <ClassDetails classDetails={classDetails} />
      </section>
    </section>
  )
}

export default Schedule