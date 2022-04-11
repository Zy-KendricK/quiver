import React from "react";
import Link from "next/link";
// layout for page

import Auth from "layouts/Auth.js";

export default function Reset() {
  return (
    <>
      <div className="mb-12 mt-2">
        <h3 className="mb-2 mt-6 text-2xl md:text-3xl font-bold  md:text-left text-center">Forgot Password</h3>
        <h6 className="md:text-left text-center text-sm text-gray-400">Enter your official quiverfinance email to receive a magic lik to reset you password.</h6>
      </div>
      <form action="" className="mb-12  px-6">
        <div className="mb-6">
          <label className="block mb-6 text-coolGray-800 font-medium">Email Address</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="dev@shuffle.dev" />
        </div>
        <a className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">
          Send Magic Link</a>
        <p className="text-center">
          <span className="text-xs font-medium">Don’t have an account? </span>
          <Link href="/auth/register">
            <a className="inline-block text-xs mb-12 font-medium text-green-500 hover:text-green-600 hover:underline" href="#">Create an account</a>
          </Link>
        </p>
      </form>
    </>
  );
}

Reset.layout = Auth;
