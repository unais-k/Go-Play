import React from "react";
import { TbLockOpen, TbLockOpenOff } from "react-icons/tb";
import { GrView } from "react-icons/gr";

function GroundListPageAdmin() {
    return (
        <div className="">
            <div>
                <h1 className="w-full ms-4 my-3 font-normal text-2xl font-heading uppercase">Ground-List</h1>
            </div>
            <div className="">
                <div className="min-w-screen  bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Profile</th>
                                        <th className="py-3 px-6 text-center">Name</th>
                                        <th className="py-3 px-6 text-center">Owner</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                        <th className="py-3 px-6 text-center">View</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <img className="w-6 h-6 rounded-full" src="/images/1.jpg" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center whitespace-nowrap">
                                            <div className=" text-center">
                                                <span className="font-medium ">name</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="items-center justify-center">name</div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                                Active
                                            </span>

                                            <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                                Blocked
                                            </span>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <TbLockOpen size={20} />
                                                    <TbLockOpenOff size={20} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <GrView size={20} />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundListPageAdmin;
