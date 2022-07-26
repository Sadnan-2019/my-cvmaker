import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import {Link} from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.int";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  const liItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/cv-writing">CV WRITING</Link>
      </li>
      <li>
        <Link to="/manage-todo">RESUME WRITING</Link>
      </li>
      <li>
        <Link to="/profile">Examples</Link>
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {liItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{liItems}</ul>
      </div>
      <div class="navbar-end   ">
     
       
        {user ? 
      <div class="dropdown dropdown-end">
        <label tabindex="0" class=" btn btn-ghost btn-circle avatar">
           
            <div class="w-10 rounded-full ">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          
        </label>
        <ul
          tabindex="0"
          class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          <li>
          <a className="text-xs	 ">{user?.email}</a>
          </li>
          <li>
            <Link to="/profile"><button className=" text-sm	 " >
            Profile
          </button></Link>
          </li>
          <li>
            <a><button className=" text-sm	  " onClick={logout}>
            Signout
          </button></a>
          
          </li>
        </ul>
      </div> : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>

    </div>
  );
};

export default Header;
