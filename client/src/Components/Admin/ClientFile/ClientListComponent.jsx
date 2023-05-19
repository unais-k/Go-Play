import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { clientListReqApi } from "../../../API/Services/AdminRequest";
import { GrView } from "react-icons/gr";
import { message } from "antd";
import Loader from "../Layout/Loader";

function ClientListComponent() {
    const token = useSelector((state) => state.adminLogin.token);
    const [loader, setLoader] = useState(false);
    const [state, setState] = useState([]);

    const getOwnerList = async () => {
        setLoader(true);
        const response = await clientListReqApi(token);
        if (response.status === 200) {
            setState(response.data.result);
            setLoader(false);
        } else {
            message.error("Something wrong try again later");
        }
    };

    useEffect(() => {
        token && getOwnerList();
    }, [token]);

    return (
        <div>
            {" "}
            <div className="">
                <div>
                    <h1 className="w-full ms-4 my-3 font-normal text-2xl font-heading uppercase">Client-List</h1>
                </div>
                <div className="">
                    <div className="min-w-screen flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-full lg:w-5/6">
                            {loader && <Loader />}
                            <div className="bg-white shadow-md rounded my-6">
                                <table className="min-w-max w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-center">Name</th>
                                            <th className="py-3 px-6 text-center">Phone</th>
                                            <th className="py-3 px-6 text-center">Booking</th>
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
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="items-center justify-center">0</div>
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

export default ClientListComponent;
