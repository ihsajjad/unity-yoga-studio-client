import { useEffect, useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

const AddEvent = () => {

  const [events, setEvents] = useState([]);
  const [eventData,setEventData] = useState({
    name:null,
    description:null,
    date:null
  })

  /* Handling Inputs Change */
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventData({...eventData,[name]:value})
  }

  /* Fetching Events */
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/events.json");
      const fetchedEvents = await res.json();
      setEvents(fetchedEvents);
    }
    fetchEvents();
  }, [])

  /* Handling Submit The Form */
  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  /* Handling Delete a Class */
  const handleDeleteClass = async () => { }

  return <section className="flex gap-8 md:gap-4 flex-col md:flex-row">
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <h1 className="text-center md:text-4xl text-3xl text-[var(--secondary-color)] font-bold">Add Events</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl flex items-center gap-1">Event Name</span>
          <input
            className="outline-none border-b-2 border-[var(--secondary-color)]"
            type="text"
            placeholder="Enter Event Name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl flex items-center gap-1">Description</span>
          <textarea
            className="outline-none border-2 border-[var(--secondary-color)] p-2"
            rows="3"
            type="text"
            placeholder="Enter Event Name"
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl flex items-center gap-1">Date (dd/mm/yyyy)</span>
          <input
            className="outline-none border-b-2 border-[var(--secondary-color)]"
            type="text"
            placeholder="Enter Date"
            name="date"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl flex items-center gap-1">Date</span>
          <input
            className="w-[20rem] file-input file-input-bordered file-input-primary"
            type="file"
            placeholder="Enter Date"
            name="name"
          />
        </div>
        <button type="submit" className="custom-btn-secondary w-[10rem] self-center">Add</button>
      </form>
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center gap-2 text-center">
      {
        events.map((event) => {
          return (
            <div key={event._id} className="flex flex-col items-center w-[20rem] border-2 border-[var(--secondary-color)] p-2 rounded-lg">
              <h3 className=" text-2xl font-bold text-[var(--secondary-color)]">{event.name}</h3>
              <span className="font-bold text-xl flex items-center gap-1"><BsCalendar2DateFill />{event.date}</span>
              <p>{event.description}</p>
              <div className="mt-2 flex items-center gap-2 self-start">
                <button className="bg-[var(--secondary-color)] rounded-md text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1 mt-2">View Shedule</button>
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
};

export default AddEvent;
