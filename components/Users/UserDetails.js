import React from "react";
import Image from 'next/image'

export default function UserDetails() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <div className="relative w-auto mx-auto max-w-md whitespace-pre-line scroll-smooth overflow-auto">
                {/*content*/}
                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 rounded-t">
                        {/* <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3> */}
                        <button
                            className="p-1 bg-blueGray-50 float-left text-lg rounded-full leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-blueGray-300 px-3 text-lg block outline-none focus:outline-none">
                                -
                            </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto text-center">
                        <Image className="object-cover object-center h-32 rounded-full" src="/img/team-3-800x800.jpg" width={100} height={100} alt='Woman looking front' />
                        <div className="text-center my-2 border-b">
                            <h2 className="font-semibold py-2">$philipM</h2>
                            <p className="py-2">philip.masoan@example.com</p>
                            <p className="py-2">Last seen active <span className="text-blueGray-400"><i className="fas fa-square mx-2"></i>2mins. ago</span></p>
                        </div>
                        <div className="flex-col md:grid md:grid-cols-3 md:divide-x mdb:divide-y divide-green-300 bg-green-500 rounded-lg py-4 px border-t">
                            <div className="p-4  text-white items-center">
                                <div className="text-left tracking-wide">
                                    <p className="text-xs font-normal text-slate-300 group-hover:text-white">Flat Balance</p>
                                    <p className="text-xl font-medium text-slate-500 group-hover:text-slate-300">$2,923.41</p>
                                </div>
                            </div>
                            <div className="p-4 text-white items-center">
                                <div className="text-left tracking-wide">
                                    <p className="text-xs font-normal text-slate-300 group-hover:text-white">Total QPs</p>
                                    <p className="text-xl font-medium text-slate-500 group-hover:text-slate-300"><i className="fas fa-star text-white mr-1"></i>1,287</p>
                                </div>
                            </div>
                            <div className="p-4 text-white items-center">
                                <div className="text-left tracking-wide">
                                    <p className="text-xs font-normal text-slate-300 group-hover:text-white">Loans</p>
                                    <p className="text-xl font-medium text-slate-500 group-hover:text-slate-300">-$1500</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 mt-2">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span className={"text-blueGray-400 font-light"}>Referred by</span>
                                        </th>
                                        <td className="align-middle text-xs whitespace-nowrap p-4 text-right text-quivercolor">
                                            $wilson
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span className={"text-blueGray-400 font-light"}>NO. of Referrals</span>
                                        </th>
                                        <td className="align-middle text-xs whitespace-nowrap p-4 text-right text-quivercolor">
                                            1
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span className={"text-blueGray-400 font-light"}>KYC Level</span>
                                        </th>
                                        <td className="align-middle text-xs whitespace-nowrap p-4 text-right">
                                            <span className={"font-semibold text-green-400"}
                                            // className={"font-semibold " + (
                                            //     tableProps.row.original.status == "Completed" ? "text-green-400" :
                                            //         tableProps.row.original.status == "KYC Level 1" ? "text-gray-400" :
                                            //             tableProps.row.original.status == "KYC Level 2" ? "text-indigo-400" : "text-red-400")}
                                            >
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="align-middle text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span className={"text-blueGray-400 font-light"}>Joined</span>
                                        </th>
                                        <td className="align-middle text-xs whitespace-nowrap p-4 text-right">
                                            Apr 01, 2022
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-2 text-left">
                            <div className="mb-1 pt-0">
                                <label className="text-xs font-bold text-quivercolor pb-1">Send a message</label>
                                <textarea type="text" className="bg-blueGray-100 text-blueGray-600 relative border border-blueGray-00 rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full" rows="4"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold w-full text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        ><i className="far fa-comment-alt-lines"></i>Send a message
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}