import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
// import { useUpdateProfile } from 'react-firebase-hooks/auth';

import Loading from '../Loading/Loading';


import auth from "../../firebase.int";

const Register = () => {
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updatederror] = useUpdateProfile(auth);


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate(); 

  let signInerror;
 if(loading || Gloading || updating){
    return <Loading></Loading>
  }
  if(error || Gerror || updatederror){
    signInerror=<p className='text-red-500'>{ error.message || Gerror.message || updatederror.message }</p>
  }


  const onSubmit = async(data) =>{
   await createUserWithEmailAndPassword(data.email, data.password);
   await updateProfile({displayName:data.name})
    console.log(data)} 
   
 
  navigate("/");
  
  ;
  if (Guser) {
    console.log(Guser);
  }

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
            <p className="text-2xl text-center font-bold mt-2">Register</p>
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Please file the name field",
                      },
                    })}
                    type="text"
                    placeholder="your name"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    class="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "your email is requried",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "provide valid mail",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt   text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500 label-text-alt">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                
                    class="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is requried",
                      },
                      minLength: {
                        value: 6,
                        message: "provide 6 charcter pasword or more",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt   text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500 label-text-alt">
                        {errors.password.message}
                      </span>
                    )}
                  </label>

                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {signInerror}
                <div class="form-control mt-6">
                  <input
                    className="btn btn-primary m-1"
                    type="submit"
                    value="Register"
                  />
                </div>
                <p>
                  For exit Account ? Please clcik
                  <Link to="/login " className="  btn btn-link text-primary">
                    Login
                  </Link>
                </p>
              </form>
              <div className="p-1">
                  <button
                    class="btn btn-primary m-1 "
                    onClick={() => signInWithGoogle()}
                  >
                    Google
                  </button>
                  <button class="btn btn-primary m-1">Facebook</button>
                  <button class="btn btn-primary m-1">Github</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
