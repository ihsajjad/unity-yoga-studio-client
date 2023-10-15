import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HYfBsVR/jd-mason-x-CPdjit-Y5s-Q-unsplash.jpg)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-white text-5xl font-bold">Signup now!</h1>
          <p className="py-6 text-white font-bold">
            Welcome, Admin! Securely create your account.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[var(--main-color)]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
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
                className="input input-bordered"
              />
              {errors.password?.type === true && (
                <span className="mt-2 text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="mt-2 text-red-500">
                  Password should be atleast 6 characters.
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="mt-2 text-red-500">
                  Password should not be more than 20 characters.
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="mt-2 text-red-500">
                  Password must have one uppercase and one number.
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="custom-btn-primary uppercase"
                type="submit"
                value="Signup"
              />
            </div>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link className="font-semibold" to="/admin-login">
                Login here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
