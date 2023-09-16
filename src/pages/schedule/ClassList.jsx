import React, { useEffect } from 'react'
import { BsFillStopwatchFill } from 'react-icons/bs'

const ClassList = ({ classes, setClassId }) => {

  useEffect(() => {
    const classes = document.querySelectorAll(".class");
    classes.forEach((Class) => {
      Class.addEventListener("click", () => {
        classes.forEach((Class) => {
          Class.classList.remove("active-class");
        })
        Class.classList.add("active-class")
      })
    })
  })

  return (
    <section className='h-auto section-container flex items-center justify-center flex-col flex-wrap gap-4'>
      {
        classes.map((Class) => {
          return (
            <div
              onClick={() => setClassId(Class._id)}
              key={Class._id}
              className={`w-[22rem] flex items-center justify-between gap-4 border-2 rounded-lg border-[var(--secondary-color)] p-2 class ${Class._id === 1 && 'active-class'}`}
            >
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-2xl font-bold text-center flex items-center gap-1'>
                  <BsFillStopwatchFill size={22} />{Class.time}
                </span>
                <span className='text-xl'>{Class.name}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>~{Class.instructor.name}</span>
                <img className='w-12 rounded-full' src={Class.instructor.imgUrl} alt="" />
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default ClassList