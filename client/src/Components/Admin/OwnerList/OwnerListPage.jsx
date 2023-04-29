import React, { useEffect, useState } from "react";
import { OwnerListReqApi } from "../../../API/Services/AdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";
import { TbLockOpen, TbLockOpenOff } from "react-icons/tb";
import { GrView } from "react-icons/gr";

function OwnerListPage() {
    const [state, setState] = useState([]);
    const token = useSelector((state) => state.adminLogin.token);

    useEffect(() => {
        getOwnerList();
    }, []);

    const getOwnerList = async () => {
        const response = await OwnerListReqApi(token);
        if (response.status === 201) {
            setState(response.data.result);
        } else {
            message.error("Something wrong try again later");
        }
    };
    return (
        <div>
            <div className="">
                <div>
                    <h1 className="w-full ms-4 my-3 font-normal text-2xl font-heading uppercase">Owner-List</h1>
                </div>
                <div className="">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full lg:w-5/6">
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="min-w-max w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-center">Name</th>
                                            <th className="py-3 px-6 text-center">Phone</th>
                                            {/* <th className="py-3 px-6 text-center">Booking</th> */}
                                            <th className="py-3 px-6 text-center">Actions</th>
                                            <th className="py-3 px-6 text-center">View</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-sm font-light">
                                        {state.map((res) => {
                                            return (
                                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left">
                                                        <div className=" text-center">
                                                            <span className="font-medium ">{res.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center whitespace-nowrap">
                                                        <div className=" text-center">
                                                            <span className="font-medium ">{res.phone}</span>
                                                        </div>
                                                    </td>
                                                    {/* <td className="py-3 px-6 text-center">
                                                        <div className="items-center justify-center">0</div>
                                                    </td> */}
                                                    <td className="py-3 px-6 text-center">
                                                        {/* {res.status ? (
                                                            <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                                                Blocked
                                                            </span>
                                                        ) : (
                                                            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                                                Active
                                                            </span>
                                                        )} */}
                                                        hello
                                                    </td>
                                                    {/* <td className="py-3 px-6 text-center">
                                                        <div className="flex item-center justify-center">
                                                            {res.status ? (
                                                                <div
                                                                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                                    onClick={() => handleUnBlock(res._id)}
                                                                >
                                                                    <TbLockOpenOff size={20} />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                                    onClick={() => handleBlock(res._id)}
                                                                >
                                                                    <TbLockOpen size={20} />
                                                                </div>
                                                            )}
                                                            hello
                                                        </div>
                                                    </td> */}
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="flex item-center justify-center">
                                                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                <GrView size={20} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnerListPage;
