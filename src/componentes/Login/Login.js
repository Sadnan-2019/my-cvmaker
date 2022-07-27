import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
     return (
          <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
           
            <div class="card flex-shrink-0 w-full   shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" class="input input-bordered" />
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
                  <button class="btn btn-primary">Login</button>
                </div>
                <p>For new Account ? Please clcik

                  <Link to="/register" className='  btn btn-link text-primary'>Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
     );
};

export default Login;