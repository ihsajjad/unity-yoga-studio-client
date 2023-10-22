import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const res = await fetch("/messages.json");
      const data = await res.json();
      setMessages(data);
    };
    loadMessages();
  }, []);

  const handleModal = (i) => {
    setOpenModal(true);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[var(--secondary-color)] text-white">
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Email</th>
              <th className="text-xl font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, i) => {
              return (
                <tr className="hover border-gray-300" key={message.id}>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td className="relative">
                    <button
                      onClick={() => handleModal(i)}
                      className="bg-[var(--secondary-color)] text-white px-2 py-1 rounded"
                    >
                      View Message
                    </button>
                    <div
                      id={`modal-${i}`}
                      className={`${
                        openModal ? "absolute " : "hidden"
                      } z-10 top-11 w-52 bg-slate-300 p-4 rounded-lg`}
                    >
                      {message.message}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
