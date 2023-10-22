import { useEffect } from "react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddInstructor = () => {
  const [instructorData, setInstructorData] = useState({
    name: "",
    specialization: "",
    bio: "",
    teaching_philosophy: "",
    email: "",
    phone: "",
    image: "",
  });
  const [response, setResponse] = useState("");
  const [instructors, setInstructors] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [refetch, setRefetch] = useState(false);

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
  }, [refetch]);

  const img_hosting_URL = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  /* Handling Uploading Image */
  const handleImage = async (e) => {
    const image = e.target.files;

    if (image) {
      // Create FormData and append the image file
      const formData = new FormData();
      formData.append("image", image[0]);
      // Upload the image to imgBB
      const imgResponse = await fetch(img_hosting_URL, {
        method: "POST",
        body: formData,
      });

      if (imgResponse.ok) {
        const imgData = await imgResponse.json();
        setInstructorData((p) => ({
          ...p,
          image: imgData.data.display_url,
        }));
      } else {
        console.error("Image upload failed.");
      }
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInstructorData({ ...instructorData, [name]: value });
  };

  const handleAddingInstructor = async () => {
    setResponse("");
    try {
      const res = await fetch(
        "https://yoga.asdfrajkumar112.repl.co/instructor/create-instructor",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(instructorData),
        }
      );
      const data = await res.json();
      setResponse(data);
      setRefetch((p) => !p);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteInstructor = (id) => {
    fetch(
      `https://yoga.asdfrajkumar112.repl.co/instructor/delete-instructor/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setRefetch((p) => !p);
        }
      });
  };

  /* Select Update Mode */
  const selectUpdateModeClass = async (instructorName) => {
    const res = await fetch(
      `https://yoga.asdfrajkumar112.repl.co/instructor/show-instructor-by-name/${instructorName}`
    );
    const data = await res.json();
    setInstructorData(data);
    setIsUpdateMode(true);
  };

  const handleUpdateInstructor = async () => {
    const res = await fetch(
      `https://yoga.asdfrajkumar112.repl.co/instructor/update-instructor/${instructorData.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(instructorData),
      }
    );
    const data = await res.json();
    if (data) {
      setRefetch((p) => !p);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-[var(--secondary-color)] text-center text-4xl">
        {isUpdateMode ? "Update" : "Add"} Instructor
      </h1>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-8/12">
          {/* new instructors form */}
          <div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Instructors Name</span>
                </label>
                <input
                  type="text"
                  placeholder="instructors name"
                  className=" border-b-2 border-[var(--secondary-color)]"
                  defaultValue={instructorData.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Specialization</span>
                </label>
                <input
                  type="text"
                  placeholder="Specialization"
                  defaultValue={instructorData.specialization}
                  className=" border-b-2 border-[var(--secondary-color)]"
                  name="specialization"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Bio</span>
                </label>
                <textarea
                  className="textarea border-2 border-[var(--secondary-color)]"
                  placeholder="Bio"
                  name="bio"
                  defaultValue={instructorData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div>
                <input
                  type="file"
                  defaultValue={instructorData.image}
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  onChange={handleImage}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Teaching Philosofy</span>
                </label>
                <input
                  type="text"
                  placeholder="Teaching Philosofy"
                  defaultValue={instructorData.teaching_philosophy}
                  className=" border-b-2 border-[var(--secondary-color)]"
                  name="teaching_philosophy"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  defaultValue={instructorData.email}
                  className=" border-b-2 border-[var(--secondary-color)]"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-bold">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  defaultValue={instructorData.phone}
                  className=" border-b-2 border-[var(--secondary-color)]"
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
              {response && (
                <span
                  className={`${
                    response?.message.includes("successfully")
                      ? "text-green-500"
                      : "bg-red-500"
                  } font-bold`}
                >
                  {response?.message}
                </span>
              )}
              <button
                className="custom-btn-secondary self-center w-[10rem]"
                type="submit"
                onClick={
                  isUpdateMode ? handleUpdateInstructor : handleAddingInstructor
                }
              >
                {isUpdateMode ? "Update" : "Add"}
              </button>
            </div>
          </div>
          {/* present instructors */}
          <div></div>
        </div>

        {/* Instructors Section Starts Here */}
        <div className=" h-auto lg:w-4/12 px-4 flex flex-col items-center gap-2">
          {instructors.length > 0 &&
            instructors?.map((instructor, i) => {
              return (
                <div
                  key={i}
                  className="w-[20rem] border-2 border-[var(--secondary-color)] rounded-md p-2"
                >
                  <div className="flex gap-2">
                    <img
                      src={instructor.image}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{instructor.name}</h2>
                      <p>{instructor.email}</p>
                    </div>
                  </div>
                  <p className="">
                    {instructor.bio.slice(0, 100)}
                    {instructor.bio.length > 100 && "..."}
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    <FaEdit
                      onClick={() => selectUpdateModeClass(instructor.name)}
                      size={32}
                      className="cursor-pointer text-green-700 hover:text-[var(--secondary-color)]"
                    />
                    <MdDelete
                      onClick={() => handleDeleteInstructor(instructor.id)}
                      size={32}
                      className="cursor-pointer text-red-700 hover:text-[var(--secondary-color)]"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
