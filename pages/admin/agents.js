import React from "react";

// layout for page
import Admin from "layouts/Admin.js";

// components
import AgentsPeople from "components/Tables/AgentsPeople";
import AgentsInvites from "components/Tables/AgentsInvites";

export default function Agents() {
    const [openTab, setOpenTab] = React.useState(1);
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="md:pt-32 pt-12 mx-auto w-full">
                <div className="flex flex-wrap">
                    <div className="px-4 md:px-10 relative w-full max-w-full flex-grow flex-1 mb-2 text-center flex justify-between">
                        <h2 className="text-blueGray-700 text-lg font-semibold py-4">
                            Agents
                        </h2>
                        <button onClick={() => setShowModal(true)}
                            className={"bg-green-500 active:bg-green-600 text-white font-bold text-xs px-6 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 " +
                                (openTab === 2 ? "block" : "hidden")}>
                            <i className="fas fa-plus mr-3"></i>  Invite a new team member
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="px-4 md:px-10 flex mb-0 list-none flex-wrap pt-3 flex-row border-b w-full "
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 1
                                                    ? "border-b-4 border-green-600 font-semibold"
                                                    : "text-quivercolor bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >People <span className="text-xs font-semibold inline-block py-1 px-2 ml-2 rounded text-white bg-green-500 uppercase last:mr-0 mr-1">
                                                24
                                            </span>
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 2
                                                    ? "border-b-4 border-green-600 font-semibold"
                                                    : "text-quivercolor bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"
                                            role="tablist"
                                        >
                                            Invitations <span className="text-xs font-semibold inline-block py-1 px-2 ml-2 rounded bg-gray-200 uppercase last:mr-0 mr-1">
                                                3
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <AgentsPeople />
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <AgentsInvites />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="border-0 relative flex flex-col w-full bg-white outline-none focus:outline-none px-80">
                                <div className="flex items-start justify-between 2xl:p-5 p-2 rounded-t">
                                    <h3 className="text-sm font-semibold">
                                        Invite new team member <br></br>
                                        <span className="text-xs font-normal text-gray-400">Send an invitation to your new team member</span>
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
                                <div className="relative 2xl:px-96 px-56 2xl:pt-24 pt-32 flex-auto h-screen overflow-auto">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative mb-3">
                                            <label
                                                className="block text-quivercolor text-sm font-bold mb-3"
                                                htmlFor="grid-password"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div className="relative mb-3">
                                            <label
                                                className="block text-quivercolor text-sm font-bold mb-3"
                                                htmlFor="grid-password"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="appearance-none block p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg placeholder-coolGray-400 
                                            focus:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border focus:border-green-500 focus:border-opacity-50 
                                            w-full ease-linear transition-all duration-150
                                            valid:border-green-500 valid:bg-green-50 valid:ring-green-500
                                            invalid:border-red-500 invalid:bg-red-50 invalid:ring-red-500"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block text-quivercolor text-sm font-bold mb-3"
                                            htmlFor="grid-password"
                                        >
                                            Assign role
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
                                    <button type="btn" className="inline-block py-4 px-2 w-1/2 text-base text-green-50 font-medium text-center leading-6 
                                    bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 
                                    rounded-md shadow-sm mt-8" href="#" disabled="disabled">
                                        Send invitation</button>
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

Agents.layout = Admin;
