import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-[var(--secondary-color)] text-5xl font-bold">Login now!</h1>
          <p className="py-6">Welcome, Admin! Securely access the dashboard.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="custom-btn-primary uppercase" type="submit" value="Login" />
            </div>
            <p className="text-center mt-3">Don't have an account? <Link className="font-semibold" to="/admin-signup">Signup here.</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
