import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import loginAnimation from '../../assets/loginAnimation.json'
import Lottie from "lottie-react";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm(); // Get setError from useForm
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    if (data.password !== data.confirm) {
      setError("confirm", {
        type: "manual",
        message: "Passwords do not match"
      });
      return;
    }

    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
      });
    navigate('/dashboard');
  };
  //google sign in is here
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
      });
    navigate('/dashboard')
  }

  return (
    <div className="hero min-h-screen mx-auto bg-[var(--primary-bg)]">
      <div className="hero-content flex-col mx-auto lg:flex-row-reverse gap-8">
        <div className="flex-1">
          <Lottie animationData={loginAnimation} className="w-full h-full" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[var(--secondary-color)]">
          <h1 className="text-[var(--secondary-color)] text-center mt-4 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[0-9])/
              })} name="password" placeholder="password" className="input input-bordered" />
              {errors.password?.type === true && <span className="mt-2 text-red-500">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="mt-2 text-red-500">Password should be atleast 6 characters.</span>}
              {errors.password?.type === 'maxLength' && <span className="mt-2 text-red-500">Password should not be more than 20 characters.</span>}
              {errors.password?.type === 'pattern' && <span className="mt-2 text-red-500">Password must have one uppercase and one number.</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input
                type="password"
                {...register("confirm", { required: true })}
                name="confirm"
                placeholder="retype the password"
                className={`input input-bordered ${errors.confirm ? 'input-error' : ''}`}
              />
              {errors.confirm && (
                <span className="mt-2 text-red-500">{errors.confirm.message}</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="custom-btn-secondary uppercase" type="submit" value="Login" />
            </div>
            <p className="text-center mt-3">Don't have an account? <Link className="font-semibold" to="/admin-signup">Signup here.</Link></p>
            {/* google signin is here */}
            <div className="w-full text-center mt-3">
              <button onClick={handleGoogleSignIn} className="btn btn-square btn-outline">
                <FcGoogle className="w-8 h-8"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
