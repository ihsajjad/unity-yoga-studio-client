import React, { useEffect } from 'react'

const Calendar = ({ setDay }) => {

    const Days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

    //To Select the day
    useEffect(() => {
        const days = document.querySelectorAll(".days");
        days.forEach((day) => {
            day.addEventListener("click", () => {
                days.forEach((day) => {
                    day.classList.remove("active-day");
                })
                day.classList.add("active-day")
            })
        })
    }, [])

    return (
        <div className='flex justify-center items-center gap-4 flex-wrap md:flex-nowrap sm:flex-col p-2'>
            {
                Days.map((day, i) => {
                    return <div
                        key={i}
                        onClick={() => setDay(day)}
                        className={`h-16 w-16 rounded-xl text-xl font-bold bg-[var(--secondary-color)] text-white border-t-[6px] border-[var(--main-color)] flex items-center justify-center days ${i === 0 && 'active-day'} cursor-default`}
                    >
                        {day}
                    </div>
                })
            }

        </div>
    )
}

export default Calendar