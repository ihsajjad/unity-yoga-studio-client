import React, { useEffect, useState } from 'react'

const showBookedClass = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/bookedClass.json")
            const fetchedClasses = await res.json();
            setClasses(fetchedClasses);
        }
        fetchData();
    }, [])

    return (
        <section className='section-container'>
            <h1 className='text-3xl text-[var(--secondary-color)] font-bold text-center mb-8'>Booked Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[var(--secondary-color)] text-white'>
                            <th className='text-xl font-bold'></th>
                            <th className='text-xl font-bold'>Name</th>
                            <th className='text-xl font-bold'>Class Name</th>
                            <th className='text-xl font-bold'>Mob</th>
                            <th className='text-xl font-bold'>E-mail</th>
                            <th className='text-xl font-bold'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((Class) => {
                                return (
                                    <tr className="hover border-gray-300" key={Class._id}>
                                        <td>{Class._id}</td>
                                        <td>{Class.name}</td>
                                        <td>{Class.class_name}</td>
                                        <td>{Class.phone}</td>
                                        <td>{Class.email}</td>
                                        <td>{Class.time}</td>
                                        <td><button className='bg-green-700 text-white px-2 py-1 rounded-2xl'>Verify</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default showBookedClass