/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Image from 'next/image';
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px px-72">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Quiver Console- Admin to manage manage Quiver app.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Welcome User, On this platform you would be able to manage users, view transactions, app authorizations and also obtaining data as being used on out mobile quiver application.
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click
                </a>
                and use your provided information to login. If not yet a user create an account and get stareted.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">Once Again Welcome on board,
                <br></br>The Quiver Team.
              </p>
              <div className="mt-12">
                <Link href="/auth/register">
                  <a
                    href="#"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Register
                  </a>
                </Link>
                <span className="px-4">else</span>
                <Link href="/auth/login">
                  <a
                    href="#"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    Login
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/bhg.png" width={100} height={100}
          alt="..."
        />
      </section>
    </>
  );
}