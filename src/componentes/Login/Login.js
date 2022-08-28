import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.int';
import Loading from '../Loading/Loading';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';



const Login = () => {
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit=(data )=>{

    signInWithEmailAndPassword(data.email,data.password)
    console.log(data)


  }
  let signInerror;

  if(    loading || Gloading){
    return <Loading></Loading>
  }
  if(error || Gerror){
    signInerror=<p>{Gerror.message || error.message}</p>
  }
  
  if (user) {
    console.log(user);
  }
     return (
          <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
           
            <div class="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
              <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>                
              <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                  {...register("email", {
                    required: {
                      value:true,
                      message:"email field required "
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provide valid mail",
                    },

                  })}
                   type="text"
                    placeholder="email" 
                    class="input input-bordered" />
                    <label class="label">
                    {errors.email?.type === "required" && <span class="label-text text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === "pattern" && <span className='label-text text-red-500'>{errors.email.message}</span>}
                    
                    
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                  {...register("password", {
                    required: {
                      value:true,
                      message:"password field required "
                    },
                    minLength: {
                      value: 6,
                      message: "provide password 6 more digit",
                    },

                  })}
                   type="password"
                    placeholder="password" 
                    class="input input-bordered" />
                    <label class="label">
                    {errors.password?.type === "required" && <span class="label-text text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === "minLength" && <span className='label-text text-red-500'>{errors.password.message}</span>}
                    
                    
                  </label>
                </div>
                {signInerror}
               
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Login</button>
                </div>
                <p>For new Account ? Please clcik

                  <Link to="/register" className='  btn btn-link text-primary'>Register</Link>
                </p>
                </form>
                <div className='p-1'>
                  <button class="btn btn-primary m-1"   onClick={() => signInWithGoogle()}>Google</button>
                  <button class="btn btn-primary m-1">Facebook</button>
                  <button class="btn btn-primary m-1">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
};

export default Login;