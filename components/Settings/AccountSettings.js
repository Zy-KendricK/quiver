import React from "react";
import Notiflix from 'notiflix';

export default function AccountSettings() {
    function showAlert() {
        Notiflix.Notify.success('Sol lucet omnibus',
            {
                ID: 'MKA',
                timeout: 1923,
                showOnlyTheLastOne: true,
                closeButton: true,
                distance: '100px',
            });
    }
    return (<>

        <div className="flex flex-col md:flex-row md:pt-8">
            <div className="md:w-1/6 font-bold mb-3 mx-2 text-gray-800 md:pr-4">Password Change
                <div className="text-sm font-normal text-gray-400">Changing your password would automatically log you out, and require you to login with your new password.</div>
            </div>
            <div className="flex flex-col pl-3 md:pl-4 md:w-2/6">
                <div className="w-full flex-1 md:px-6 mb-3">
                    <label className="font-semibold">Current Password</label>
                    <input placeholder="**********" type="password" className="my-2 p-3 bg-white flex border border-gray-200 rounded-xl appearance-none focus:ring focus:ring-green-600 focus:border-green-600 outline-none w-full text-gray-800 " />
                </div>
                <div className="w-full flex-1 md:px-6 mb-3">
                    <label className="font-semibold">New Password</label>
                    <input placeholder="**********" type="password" className="my-2 p-3 bg-white flex border border-gray-200 rounded-xl px-2 appearance-none focus:ring focus:ring-green-600 focus:border-green-600 outline-none w-full text-gray-800 " />
                </div>
                <div className="w-full flex-1 mb-3 md:px-6">
                    <label className="font-semibold">Confirm Password</label>
                    <input placeholder="**********" type="password" className="my-2 p-3 bg-white flex border border-gray-200 rounded-xl px-2 appearance-none focus:ring focus:ring-green-600 focus:border-green-600 outline-none w-full text-gray-800 " />
                </div>
            </div>
        </div>
        <div className="flex flex-col border-b border-gray-200 md:py-8 md:flex-row">
            <div className="md:w-1/6"></div>
            <div className="md:w-2/6 flex mb-3 md:pb-4 flex-row-reverse">
                <button className="text-sm float-right md:mx-2 w-44  focus:outline-none flex justify-center px-4 py-4 rounded-xl font-bold cursor-pointer 
        hover:bg-green-100 hover:text-green-700 bg-green-500 text-green-100 border duration-200 ease-in-out  border-green-600 transition" onClick={showAlert}>Change Password</button>
            </div>
        </div>
    </>)
}