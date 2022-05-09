/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import Image from 'next/image'

// components
// layout for page
import Admin from "layouts/Admin.js";
import CardSavingsPlan from "components/Cards/CardSavingsPlan";

export default function Savings() {
    const topPlans = [1, 2, 3];
    const allPlans = [1, 2, 3, 1, 2, 3];
    // if (typeof window === 'object') {
    //     const noScroll = document.body.style.overflow = "hidden"
    // };
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className=" md:pt-32 pb-32 pt-12 relative flex flex-col min-w-0 break-words w-full mb-6">
                <div className="bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h2 className="text-blueGray-700 text-lg font-semibold">
                            Savings
                        </h2>
                        <button onClick={() => setShowModal(true)}
                            className="bg-green-500 active:bg-green-600 text-white font-bold text-xs px-6 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
                            <i className="fas fa-plus mr-3"></i>  Create new savings plan
                        </button>
                    </div>
                    <div className="grid md-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6">
                        {topPlans.map(name => (
                            <CardSavingsPlan name={name} />
                        ))}
                    </div>
                </div>
                <div className="bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h2 className="text-blueGray-700 text-lg font-semibold">
                            Created Plans & Challenges
                        </h2>
                    </div>
                    <div className="grid md-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-6 mt-6">
                        {allPlans.map(name => (
                            <CardSavingsPlan name={name} />
                        ))}
                    </div>
                </div>
            </div>
            {showModal ? (document.body.style.overflow = "hidden",
                <>
                    <div className="justify-end flex fixed top-0 left-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-screen whitespace-pre-line">
                            {/*content*/}
                            <div className="border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none px-80">
                                <div className="flex items-start justify-between 2xl:p-5 p-2 rounded-t">
                                    <h3 className="text-sm font-semibold">
                                        New Plan <br></br>
                                        <span className="text-xs font-normal text-gray-400">Create a new savings plan</span>
                                    </h3>
                                    <button
                                        className="p-1 bg-blueGray-50 float-left text-lg rounded-full leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-blueGray-300 px-3 text-lg block outline-none focus:outline-none">
                                            -
                                        </span>
                                    </button>
                                </div>
                                <div className="relative 2xl:px-96 px-56 2xl:pt-24 pt-12 flex-auto h-screen overflow-auto">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Give plan a name
                                        </label>
                                        <input
                                            type="text"
                                            className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                            placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Select cryptocurrency
                                        </label>
                                        <select
                                            type="text"
                                            className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                            placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                        ></select>
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Amount
                                        </label>
                                        <input
                                            type="text"
                                            className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                            placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                        />
                                    </div>
                                    <div className="flex flex-col mr-4 mb-4">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Frequency
                                        </label>
                                        <div className="flex items-center mr-4 mb-4">
                                            <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                            <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                <span className="ml-1">Daily</span></label>
                                        </div>

                                        <div className="flex items-center mr-4 mb-4">
                                            <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                            <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                <span className="ml-1">Weekly</span></label>
                                        </div>

                                        <div className="flex items-center mr-4 mb-4">
                                            <input id="radio3" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                            <label htmlFor="radio3" className="flex items-center cursor-pointer">
                                                <span className="ml-1">Monthly</span></label>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative mb-3">
                                            <label
                                                className="block text-quivercolor text-sm font-bold mb-3"
                                                htmlFor="grid-password"
                                            >
                                                Start date
                                            </label>
                                            <input
                                                type="date"
                                                className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                                placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                            />
                                        </div>
                                        <div className="relative mb-3">
                                            <label
                                                className="block text-quivercolor text-sm font-bold mb-3"
                                                htmlFor="grid-password"
                                            >
                                                Maturity date
                                            </label>
                                            <input
                                                type="date"
                                                className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                                placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                            />
                                        </div>
                                    </div>
                                    <button type="btn" className="inline-block py-4 px-2 w-1/2 text-base text-green-50 font-medium text-center leading-6 
                                    bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
                                    rounded-md shadow-sm mt-8" href="#" disabled="disabled">
                                        Create Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

Savings.layout = Admin;