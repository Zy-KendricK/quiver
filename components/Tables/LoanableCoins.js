import React from "react";
import Image from 'next/image'

//utils
import makeData from "Utils/makeData";
import UserTable from "Utils/UserTable";
//components
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Switch from "Utils/switch";

export default function LoanableCoins() {
    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse px-0 md:px-0">
                <tbody className="p-3">
                    <tr>
                        <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Bitcoin.svg" alt="" width={60} height={60} />
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">BTC</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Bitcoin</p>
                            </div>
                        </td>
                        <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">3,750</p>
                            </div>
                        </td>
                        <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <Switch />
                            </div>
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Ethereum.svg" alt="" width={60} height={60} />
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">BNB</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Binance Coin</p>
                            </div>
                        </td>
                        <td className="hidden md:table-cell  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">4,754</p>
                            </div>
                        </td>
                        <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <Switch />
                            </div>
                        </td>

                    </tr>
                    <tr className="border-t">
                        <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Binance_Coin(BNB).svg" alt="" width={60} height={60} />
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">ETH</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Ethereum</p>
                            </div>
                        </td>
                        <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">4,754</p>
                            </div>
                        </td>
                        <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <Switch />
                            </div>
                        </td>

                    </tr>
                    <tr className="border-t">
                        <td className="px-6 border-l-0 border-r-0 text-xs p-4 group flex items-center">
                            <Image className="shrink-0 h-12 w-12 rounded-full" src="/crypto/Tether(USDT).svg" alt="" width={60} height={60} />
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">USDT</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">Tether</p>
                            </div>
                        </td>
                        <td className="hidden md:table-cell px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <p className="text-sm font-normal text-gray-400 group-hover:text-white">Times Today</p>
                                <p className="text-lg font-medium text-slate-500 group-hover:text-slate-300">2,754</p>
                            </div>
                        </td>
                        <td className="px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <div className="pl-4">
                                <Switch />
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </>
    );
}