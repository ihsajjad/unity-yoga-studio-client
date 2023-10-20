import { useEffect, useState } from "react";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddInstructor = () => {
  const [instructorData, setInstructorData] = useState({
    name: null,
    gender: null,
    specialization: null,
    bio: null,
    teaching_philosophy: null,
    email: null,
    phone: null,
    image:
      "https://cdn.pixabay.com/photo/2023/08/08/09/20/wedding-8176868_640.jpg",
  });

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
        console.log(imgData.data.display_url);
        setInstructorData((p) => ({
          ...instructorData,
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
    console.log(instructorData);
  };

  const handleSelectGender = (e) => {
    var e = document.getElementById("gender");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    setInstructorData({ ...instructorData, gender: value });
  };

  const handleAddingInstructor = async () => {
    if (
      !instructorData.name ||
      !instructorData.gender ||
      !instructorData.specialization ||
      !instructorData.bio ||
      !instructorData.teaching_philosophy ||
      !instructorData.email ||
      !instructorData.phone
    ) {
      return window.alert("Fill Complete Data");
    }
    if (instructorData.phone.length < 10) {
      return window.alert("Mobile Number is not valid");
    }
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-[var(--secondary-color)] text-center text-4xl">
        Add Instructor
      </h1>
      <div className="">
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
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Gender</span>
              </label>
              <select
                className="select border-2 border-[var(--secondary-color)] w-full"
                id="gender"
                onChange={handleSelectGender}
              >
                <option disabled>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-bold">Specialization</span>
              </label>
              <input
                type="text"
                placeholder="specialization"
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
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <input
                type="file"
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
                placeholder="teaching philosofy"
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
                placeholder="email"
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
                placeholder="phone"
                className=" border-b-2 border-[var(--secondary-color)]"
                name="phone"
                onChange={handleInputChange}
              />
            </div>
            <button
              className="custom-btn-secondary self-center w-[10rem]"
              type="submit"
              onClick={handleAddingInstructor}
            >
              Add
            </button>
          </div>
        </div>
        {/* present instructors */}
        <div></div>
      </div>
    </div>
  );
};

export default AddInstructor;
