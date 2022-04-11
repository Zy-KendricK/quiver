import React from "react";
import { useState } from "react";
import Image from 'next/image'

export default function PersonalSettings() {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    return (<>
        <div className="flex flex-col md:flex-row border-b border-gray-200 py-8">
            <div className="md:w-1/6 font-bold h-6 mx-2 mt-3 text-gray-800 md:pr-4">Profile Photo</div>
            <div className="flex flex-col md:flex-row md:pl-4 md:w-2/6">
                <div className="w-full md:w-1/3 flex-1 mx-2">
                    <Image alt="..." className="p-2 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={createObjectURL} width={80} height={80} />
                </div>
                <div className="w-full md:w-2/3 flex-1 mx-2">
                    <div className="text-sm font-normal my-2 text-gray-400">Upload images in PNG or JPG format, with a maximum size of 5MB</div>
                    <input type="file" className="mt-2 capitalize" name="myImage" onChange={uploadToClient} />
                    <a href="#">
                        <span className="float-right -mt-5 mb-5">
                            <button id="imgFIle" className="removeImg mr-2"></button>
                            <span className="text-red-500">Remove Image</span>
                        </span>
                    </a>

                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row border-b border-gray-200 py-8">
            <div className="md:w-1/6 font-bold h-6 mx-2 text-gray-800 md:pr-4">Name
                <div className="text-sm font-normal text-gray-400">Changes made to your name would be visible to others on the team</div>
            </div>
            <div className="flex flex-col md:flex-row md:pl-4 md:w-2/6">
                <div className="w-full flex-1 mx-2">
                    <label className="font-semibold">First Name</label>
                    <div className="my-2 p-3 bg-white flex border border-gray-200 rounded-lg">
                        <input placeholder="First Name..." className="p-1 px-2 appearance-none focus:ring focus:ring-green-600 outline-none w-full text-gray-800 " /> </div>
                </div>
                <div className="w-full flex-1 mx-2">
                    <label className="font-semibold">Last Name</label>
                    <div className="my-2 p-3 bg-white flex border border-gray-200 rounded-lg">
                        <input placeholder="Last Name..." className="p-1 px-2 appearance-none focus:ring focus:ring-green-600 outline-none w-full text-gray-800 " /> </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row py-8">
            <div className="w-1/6 font-bold h-6 mx-2 mt-3 text-gray-800 md:pr-4">Email Address
                <div className="text-sm font-normal mb-3 text-gray-400">Changes made to your email would be visible to others on the team</div>
            </div>
            <div className="flex md:pl-4 md:w-2/6">
                <div className="w-full flex-1 mx-2">
                    <label className="font-semibold">Active Email Address</label>
                    <div className="my-2  mb-3 p-3 w-full bg-white flex border border-gray-200 rounded-lg">
                        <input placeholder="example@example.com" className="p-1 px-2 appearance-none focus:ring focus:ring-green-600 outline-none w-full text-gray-800 " />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/6 mx-2 font-bold h-6 mt-3 text-gray-800"></div>
            <div className="md:w-2/6 flex flex-col md:flex-row md:flex-row-reverse">
                <button className="text-sm float-right mx-2 w-44  focus:outline-none flex justify-center px-4 py-4 rounded-xl font-bold cursor-pointer 
        hover:bg-green-100 hover:text-green-700 bg-green-500 text-green-100 border duration-200 ease-in-out  border-green-600 transition">Save Changes</button>
            </div>
        </div>
    </>)
}