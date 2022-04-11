import React from "react";

// components
// layout for page
import Admin from "layouts/Admin.js";
import PersonalSettings from "components/Settings/PersonalSettings";
import AccountSettings from "components/Settings/AccountSettings";

export default function Settings() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="px-4 md:px-10 md:pt-32 pt-12 mx-auto w-full">
                <div className="flex flex-wrap">
                    <div className="relative w-full max-w-full flex-grow flex-1 mb-2">
                        <h2 className="text-blueGray-700 text-lg font-semibold">
                            Settings
                        </h2>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex mb-0 list-none flex-wrap pt-3 flex-row border-b w-full "
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 1
                                                    ? "border-b-2 border-green-600 font-semibold"
                                                    : "text-blueGray-600 bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >Personal Settings
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2">
                                        <a
                                            className={
                                                "text-md py-3 pr-5 rounded block leading-normal " +
                                                (openTab === 2
                                                    ? "border-b-2 border-green-600 font-semibold"
                                                    : "text-blueGray-600 bg-white")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >
                                            Account Security
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <PersonalSettings />
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <AccountSettings />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Settings.layout = Admin;