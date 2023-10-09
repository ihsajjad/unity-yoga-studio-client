import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Lottie from 'lottie-react';
import signUpAnimation from '../../assets/signUpAnimation.json';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // image hosting URL
  const img_hosting_URL = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = async (data) => {
    // Validate password match
    if (data.password !== data.confirm) {
      setError('confirm', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }

    try {
      // const result = await createUser(data.email, data.password);
      // const loggedUser = result.user;
      // console.log(loggedUser);

      const user = {
        username: data.name,
        email: data.email,
        // password: data.password,
      };

      const registrationResponse = await fetch('https://yoga-unity.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (registrationResponse.ok) {
        const registeredUser = await registrationResponse.json();
        console.log('User registered:', registeredUser);
        
      } else {
        console.error('User registration failed.');
        
      }

      // Get the uploaded file
      const imageFile = data.photoURL[0];

      // Create FormData and append the image file
      const formData = new FormData();
      formData.append('image', imageFile);

      // Upload the image to imgBB
      const imgResponse = await fetch(img_hosting_URL, {
        method: 'POST',
        body: formData,
      });

      if (imgResponse.ok) {
        const imgData = await imgResponse.json();
        console.log(imgData);
      } else {
        console.error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="hero min-h-screen mx-auto bg-[var(--primary-bg)]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div>
          <Lottie animationData={signUpAnimation} className="w-full h-full" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[var(--secondary-color)]">
          <h1 className="text-[var(--secondary-color)] text-center mt-5 text-5xl font-bold">Signup now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register('name')} name="name" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="file"
                {...register('photoURL')}
                placeholder="Photo URL"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
              {errors.photoURL && <span className="mt-2 text-red-500">Photo URL is required.</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register('email')} name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[0-9])/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === true && <span className="mt-2 text-red-500">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="mt-2 text-red-500">Password should be at least 6 characters.</span>}
              {errors.password?.type === 'maxLength' && <span className="mt-2 text-red-500">Password should not be more than 20 characters.</span>}
              {errors.password?.type === 'pattern' && <span className="mt-2 text-red-500">Password must have one uppercase and one number.</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retype Password</span>
              </label>
              <input
                type="password"
                {...register('confirm', { required: true })}
                name="confirm"
                placeholder="retype the password"
                className={`input input-bordered ${errors.confirm ? 'input-error' : ''}`}
              />
              {errors.confirm && (
                <span className="mt-2 text-red-500">{errors.confirm.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="custom-btn-secondary uppercase" type="submit" value="Signup" />
            </div>
            <p className="text-center mt-3">Already have an account? <Link className="font-semibold" to="/admin-login">Login here.</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
