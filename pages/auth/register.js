import React from "react";

// layout for page

import Auth from "layouts/Auth.js";
import Link from "next/link"

export default function Register() {
  return (
    <>
      <div className="mb-6">
        <div className="container flex px-6">
          <div className="w-2/3">
            <h3 className="mb-4 text-2xl md:text-3xl font-bold ">Create an account</h3>
            <h6 className="text-sm md:text-lg text-gray-400">Setup Account Credentials.</h6>
          </div>
          <div className="w-1/3">
            <Link href="/auth/login">
              <a className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">
                Login</a></Link>
          </div>
        </div>
      </div>
      <form action="" className="mb-n8 px-6">
        <div className="mb-4">
          <label className="block mb-2 text-coolGray-800 font-medium">Email</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="dev@shuffle.dev" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-coolGray-800 font-medium">Password</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-coolGray-800 font-medium">Confirm Password</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="w-full md:w-1/2">
            <label className="relative inline-flex items-center">
              <input className="form-checkbox appearance-none rounded focus:ring-green-500 rounded text-green-500" type="checkbox" />
              {/* <Image className="absolute top-1/2 transform -translate-y-1/2 left-0" src="flex-ui-assets/elements/sign-up/checkbox-icon.svg" alt="" /> */}
              <span className="ml-7 text-xs text-coolGray-800 font-medium">Remember me</span>
            </label>
          </div>
          <div className="w-full md:w-auto mt-1">
            <Link href="/auth/reset">
              <a className="inline-block text-xs font-medium text-green-500 hover:text-green-600" href="#">Forgot your password?</a></Link></div>
        </div>
        <Link href="/auth/login">
          <a className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">
            Login</a>
        </Link>
        <p className="text-center">
          <span className="text-xs font-medium">Don’t have an account? </span>
          <a className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline mt-n4" href="#">Create an account</a>
        </p>
      </form>
    </>
  );
}

Register.layout = Auth;
