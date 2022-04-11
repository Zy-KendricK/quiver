import React from "react";

// layout for page

import Auth from "layouts/Auth.js";

export default function Change_password() {
  return (
    <>
      <div className="mb-12 mt-2">
        <h3 className="mb-4 mt-6 text-2xl md:text-3xl font-bold">Create New Password</h3>
      </div>
      <form action="" className="mb-12 px-6">
        <div className="mb-6 px-6">
          <label className="block mb-2 text-coolGray-800 font-medium">New Password</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <div className="mb-12">
          <label className="block mb-2 text-coolGray-800 font-medium">Confirm New Password</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <a className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">
          Create New Password</a>
        <p className="text-center">
          <span className="text-xs font-medium">Don’t have an account? </span>
          <a className="inline-block text-xs mb-1 font-medium text-green-500 hover:text-green-600 hover:underline" href="#">Create an account</a>
        </p>
      </form>
    </>
  );
}

Change_password.layout = Auth;
