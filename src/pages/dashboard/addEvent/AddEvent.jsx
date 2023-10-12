import { useEffect, useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

const AddEvent = () => {

  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    name:'',
    description:'',
    date:'',
    url:''
  })

  /* Handling Inputs Change */
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEventData({ ...eventData, [name]: value })
  }

  /* Fetching Events */
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("https://yoga.asdfrajkumar112.repl.co/event/show-events");
      const fetchedEvents = await res.json();
      // setEvents(fetchedEvents);
      // console.log(fetchedEvents);
    }
    fetchEvents();
  }, [])
  

  /* Handling Submit The Form */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(eventData);
    try {
      const response = await fetch("https://yoga.asdfrajkumar112.repl.co/event/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {

        const createdEvent = await response.json();
        console.log("Event created:", createdEvent);

        setEvents([...events, createdEvent]);

        setEventData({
          name: '',
          description: '',
          date: '',
          url:''
        });
      } else {

        console.error("Failed to create event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  /* Handling Delete a Class */
  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`https://yoga.asdfrajkumar112.repl.co/event/delete-event/${eventId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Event deleted:", eventId);
        // Remove the deleted event from the local state
        setEvents(events.filter(event => event._id !== eventId));
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  <div className="mt-2 flex items-center gap-2 self-start">
    <button className="bg-[var(--secondary-color)] rounded-md text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1 mt-2">View Schedule</button>
    <MdDelete
      onClick={() => handleDeleteEvent(event._id)}
      size={32}
      className="cursor-pointer text-red-700 hover:text-[var(--secondary-color)]"
    />
  </div>


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
            type="date"
            placeholder="Enter Date"
            name="date"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-xl flex items-center gap-1">Image</span>
          <input
            className="w-[20rem] file-input file-input-bordered file-input-primary"
            type="file"
            name="name"
          />
        </div>
        <button type="submit" className="custom-btn-secondary w-[10rem] self-center">Add</button>
      </form>
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center gap-2 text-center">
      {
        events?.map((event) => {
          return (
            <div key={event._id} className="flex flex-col items-center w-[20rem] border-2 border-[var(--secondary-color)] p-2 rounded-lg">
              <h3 className=" text-2xl font-bold text-[var(--secondary-color)]">{event.name}</h3>
              <span className="font-bold text-xl flex items-center gap-1"><BsCalendar2DateFill />{event.date}</span>
              <p>{event.description}</p>
              <div className="mt-2 flex items-center gap-2 self-start">
                <button className="bg-[var(--secondary-color)] rounded-md text-white border-2 transition-all duration-300 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)] hover:bg-white px-2 py-1 mt-2">View Shedule</button>
                <MdDelete
                  onClick={() => handleDeleteClass(event._id)}
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
