import React from "react";
import Link from "next/link";
import Image from 'next/image'
// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {
  return (
    <>
      <div className="mb-6 px-6">
        <a className="inline-block mb-6" href="#">
          {/* <Image className="h-16" width="100%" height="100%" src="/img/logo.svg" alt="" /> */}
        </a>
        <h3 className="mb-4 text-2xl md:text-3xl font-bold text-center md:text-left">Login</h3>
        <h6 className="text-sm md:text-lg text-gray-400  text-center md:text-left">Kindly provide your Credentials.</h6>
      </div>
      <form action="" className="mb-6 px-6">
        <div className="mb-4">
          <label className="block mb-2 text-coolGray-800 font-medium">Email</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="email" placeholder="dev@shuffle.dev" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-coolGray-800 font-medium">Password</label>
          <input className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg  placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="password" placeholder="************" />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="w-full md:w-1/2">
            <label className="relative inline-flex items-center">
              <input className="form-checkbox appearance-none" type="checkbox" />
              {/* <Image className="absolute top-1/2 transform -translate-y-1/2 left-0" src="flex-ui-assets/elements/sign-up/checkbox-icon.svg" alt="" /> */}
              <span className="ml-7 text-xs text-coolGray-800 font-medium">Remember me</span>
            </label>
          </div>
          <div className="w-full md:w-auto mt-1">
            <Link href="/auth/reset" >
              <a className="inline-block text-xs font-medium text-green-500 hover:text-green-600" href="#">Forgot your password?</a>
            </Link>
          </div>
        </div>
        <Link href="/admin/dashboard">
          <a className="inline-block py-4 px-7 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">
            Login</a>
        </Link>
        <p className="text-center">
          <span className="text-xs font-medium">Don’t have an account? </span>
          <Link href="/auth/register">
            <a className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline" href="#">Create an account</a>
          </Link>
        </p>
      </form>
    </>
  );
}

Login.layout = Auth;
