import React from "react";

// layout for page
import Admin from "layouts/Admin.js";

// components
import AgentsPeople from "components/Tables/AgentsPeople";
import AgentsInvites from "components/Tables/AgentsInvites";
import RolesTable from "components/Tables/RolesTable";

export default function Roles() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="md:pt-32 pt-12 mx-auto w-full">
                <div className="flex flex-wrap">
                    <div className="px-4 md:px-10 relative w-full max-w-full flex-grow flex-1 mb-4 text-center flex justify-between">
                        <h2 className="text-blueGray-700 text-lg font-semibold py-2">
                            Roles & Permissions
                        </h2>
                        <button onClick={() => setShowModal(true)}
                            className={"bg-green-500 active:bg-green-600 text-white font-bold text-xs px-6 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 "}>
                            <i className="fas fa-plus mr-3"></i>  Create new Role
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <RolesTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (document.body.style.overflow = "hidden",
                <>
                    <div className="justify-end flex fixed top-0 left-0 z-50 outline-none focus:outline-none overflow-auto">
                        <div className="relative w-screen whitespace-pre-line scroll-smooth">
                            {/*content*/}
                            <div className="border-0 relative flex flex-col h-screen w-full bg-white outline-none focus:outline-none px-80">
                                <div className="flex items-start justify-between 2xl:p-5 p-2 rounded-t">
                                    <h3 className="text-sm font-semibold">
                                        Create new role<br></br>
                                        <span className="text-xs font-normal text-gray-400">Create account roles</span>
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
                                <div className="relative 2xl:px-96 px-56 2xl:pt-16 pt-8 overflow-auto">
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Give this role a name
                                        </label>
                                        <input
                                            type="text"
                                            className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="form-input">
                                        <div className="relative mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Dashboard<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-3">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold mb-3"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">View dasboard and dashboard settings</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse mb-3">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Menu<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-4">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Manage users</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Send user messages</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Cryptocurrency<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-4">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Manage cryptocurrencies</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Edit loanable coins</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Loans<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-4">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">View loan orders</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">view user loan</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative  mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Savings<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-4">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Manage all savings plan</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Create new savings plan</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative  mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Transactions<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-4">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Manage all transactions</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <div className="relative mb-1">
                                            <label
                                                className="block text-quivercolor text-sm font-bold"
                                                htmlFor="grid-password"
                                            >
                                                Teams<br></br>
                                            </label>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative mb-1">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Manage all agents</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>

                                                <div className="flex items-center mr-6 mb-1">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Invite new team members</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-1">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-1">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label
                                                    className="block text-quivercolor text-sm font-bold"
                                                    htmlFor="grid-password">
                                                    <span className="text-xs font-normal text-gray-400">Edit roles & priviledges</span>
                                                </label>
                                            </div>
                                            <div className="relative flex flex-row-reverse">
                                                <div className="flex items-center mb-4">
                                                    <input id="radio1" type="radio" name="radio" className="text-green-500 focus:ring-0" checked />
                                                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">No</span></label>
                                                </div>
                                                <div className="flex items-center mr-6 mb-4 ">
                                                    <input id="radio2" type="radio" name="radio" className="text-green-500 focus:ring-0" />
                                                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                        <span className="ml-1">Yes</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input mb-6">
                                        <div className="relative mb-1">
                                            <button type="btn" className="inline-block py-4 px-2 w-1/2 text-base text-green-50 font-medium text-center leading-6 
                                    bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
                                    rounded-md shadow-sm mt-8" href="#" disabled="disabled">
                                                Create Role</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

Roles.layout = Admin;
