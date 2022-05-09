/* eslint-disable react/jsx-key */
import React from "react";

// layout for page
import Accordion from "Utils/Accordion";
import Admin from "layouts/Admin.js";

// components
import ActivtiesTable from "components/Tables/ActivtiesTable";

export default function Activities() {
    const data = [
        {
            title: "Online",
            color: "green-500",
            count: "24",
            content: <ActivtiesTable activity={"Online"} />
        },
        {
            title: "Offline",
            color: "gray-400",
            count: "19",
            content: <ActivtiesTable activity={"Offline"} />
        }
    ]
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
                        {data.map(item => (
                            <Accordion title={item.title} content={item.content} color={item.color} count={item.count} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

Activities.layout = Admin;