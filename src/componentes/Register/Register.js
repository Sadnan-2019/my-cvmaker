import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

     return (
          <div>
          <div class="hero min-h-screen bg-base-200">
     <div class="hero-content flex-col lg:flex-row-reverse">
          
      
       <div class="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
       <p className='text-2xl text-center font-bold mt-2'>Register</p>
         <div class="card-body">

         <form onSubmit={handleSubmit(onSubmit)}>
         <div class="form-control">
             <label class="label">
               <span class="label-text">Name</span>
             </label>
             <input  {...register("name", { required: true,  })}
             type="text" placeholder="name" name='name' class="input input-bordered" />
           </div>
           <div class="form-control">
             <label class="label">
               <span class="label-text">Email</span>
             </label>
             <input {...register("email", { required: true,   })}
              type="email" placeholder="email" name='email' class="input input-bordered" />
           </div>
           <div class="form-control">
             <label class="label">
               <span class="label-text">Password</span>
             </label>
             <input {...register("password", { required: true,  })}
              type="password" placeholder="password" name='password' class="input input-bordered" />
             <label class="label">
               <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className='p-1'>
             <button class="btn btn-primary m-1">Google</button>
             <button class="btn btn-primary m-1">Facebook</button>
             <button class="btn btn-primary m-1">Github</button>
           </div>
           <div class="form-control mt-6">
            <input className='btn btn-primary m-1' type="submit" value="Register"/>
           </div>
           <p>For exit Account ? Please clcik

             <Link to="/login " className='  btn btn-link text-primary'>Login</Link>
           </p>
           </form>
         </div>
       </div>
     </div>
   </div> 
     </div>
     );
};

export default Register;