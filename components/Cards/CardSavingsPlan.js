/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image'

//components
import SavingsDropdown from "components/Dropdowns/SavingsDropdown";


export default function CardSavingsPlan({ name }) {
    return (
        <>
            <div className="bg-white rounded shadow border p-6">
                <h5 className="text-base font-bold mb-4 mt-0">Crypto Kings
                    <span className="text-sm inline rounded-full align-top float-right">
                        <SavingsDropdown />
                    </span>
                </h5>
                <div className="text-gray-700 text-sm">
                    <ul>
                        <li className="font-bold flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Bitcoin.svg" alt="" width={25} height={25} />
                            <p className="text-xs font-medium text-slate-500 group-hover:text-slate-300 ml-2">1.00 USDT Daily</p>
                        </li>
                        <li className="text-lg pt-1 font-bold text-quivercolor">
                            15.00 USDT
                        </li>
                        <li className="text-gray-400 text-sm">
                            saved so far
                        </li>
                        <li className="text-green-500 text-lg mt-8 font-bold">
                            + 5.0%
                        </li>
                        <li className="text-quivercolor text-sm">
                            Interest Rate
                        </li>
                        <li className="text-lg mt-16 font-bold">
                            <div className="flex">
                                <img
                                    src="/img/team-1-800x800.jpg"
                                    alt="..." height={36} width={36}
                                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                />
                                <img
                                    src="/img/team-2-800x800.jpg"
                                    alt="..." height={36} width={36}
                                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                />
                                <img
                                    src="/img/team-3-800x800.jpg"
                                    alt="..." height={36} width={36}
                                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                />
                                <img
                                    src="/img/team-4-470x470.png"
                                    alt="..." height={36} width={36}
                                    className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                />
                                <span className="pt-1 ml-1">+750</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}