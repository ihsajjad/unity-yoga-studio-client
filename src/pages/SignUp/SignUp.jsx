import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Lottie from "lottie-react";
import signUpAnimation from "../../assets/signUpAnimation.json";

// image hosting URL
export const img_hosting_URL = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_Image_Upload_Token
}`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const { createUser, updateProfileImgAndName } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();

  const handlePhotoUpload = async (file) => {
    // Create FormData and append the image file
    const formData = new FormData();
    formData.append("image", file);

    // Upload the image to imgBB
    const imgResponse = await fetch(img_hosting_URL, {
      method: "POST",
      body: formData,
    });

    if (imgResponse.ok) {
      const { data } = await imgResponse.json();
      setPhotoURL(data.display_url);
    } else {
      console.error("Image upload failed.");
    }
  };

  const onSubmit = async (data) => {
    // Validate password match

    if (data.password !== data.confirm) {
      setError("confirm", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        if (loggedUser && photoURL) {
          updateProfileImgAndName(data.name, photoURL);
        }
      });

      const user = {
        displayName: data.name,
        email: data.email,
        role: "user",
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="md:px-20 py-10 px-3 min-h-screen mx-auto bg-[var(--primary-bg)] border flex md:flex-row flex-col justify-between items-center gap-10 ">
      <div className="flex-1 h-full">
        <Lottie animationData={signUpAnimation} className="w-full h-[90vh]" />
      </div>
      <div className=" flex-1 bg-white max-w-sm shadow-2xl border border-[var(--secondary-color)] rounded-lg">
        <h1 className="text-[var(--secondary-color)] text-center mt-5 text-3xl font-bold">
          Sign Up now!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 md:p-5 p-3"
        >
          <input
            type="text"
            {...register("name")}
            placeholder="name"
            className="input input-bordered w-full"
          />

          <input
            type="file"
            onChange={(e) => handlePhotoUpload(e.target.files[0])}
            placeholder="Photo URL"
            className="file-input file-input-bordered m w-full"
          />

          <input
            type="email"
            {...register("email")}
            name="email"
            placeholder="email"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[0-9])/,
            })}
            name="password"
            placeholder="password"
            className="input input-bordered w-full"
          />
          {errors.password?.type === true && (
            <span className=" text-red-500">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className=" text-red-500">
              Password should be at least 6 characters.
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className=" text-red-500">
              Password should not be more than 20 characters.
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className=" text-red-500">
              Password must have one uppercase and one number.
            </span>
          )}

          <input
            type="password"
            {...register("confirm", { required: true })}
            name="confirm"
            placeholder="retype the password"
            className={`input input-bordered w-full ${
              errors.confirm ? "input-error" : ""
            }`}
          />
          {errors.confirm && (
            <span className=" text-red-500">{errors.confirm.message}</span>
          )}
          <div className="text-center">
            <input
              className="custom-btn-secondary uppercase w-full"
              type="submit"
              value="Signup"
            />
          </div>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link className="font-semibold" to="/login">
              Login here.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
