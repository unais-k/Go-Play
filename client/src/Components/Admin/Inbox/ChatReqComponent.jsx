import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatRequestReqApi } from "../../../API/Services/AdminRequest";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";

function ChatReqComponent() {
    const token = useSelector((state) => state.adminLogin.token);
    const [data, setData] = useState([]);
    const details = async () => {
        const response = await ChatRequestReqApi(token);
        if (response.status === 201) {
            setData(response.data.result);
        }
    };
    useEffect(() => {
        if (token) details();
    }, [token]);

    return (
        <div>
            <div>
                <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase">Chat Request</h1>
            </div>
            <div className="flex flex-wrap">
                {data?.length > 0 &&
                    data?.map((res) => {
                        return (
                            <div className="max-w-sm m-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {res.name}
                                    </h5>
                                </a>
                                <p>{res.name} He would like to chat with you</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone : {res.phone}</p>

                                <div className="flex">
                                    <div
                                        className="bg-green-600 text-white flex py-2 px-4 me-3 rounded"
                                        // onClick={() => handleApprove({ id: res._id })}
                                    >
                                        <MdFileDownloadDone size={22} />
                                        <button className="ms-3">Approve</button>
                                    </div>
                                    <div
                                        className="bg-red-600 text-dark flex py-2 px-4 ms-3 rounded"
                                        // onClick={() => handleCancel({ id: res._id })}
                                    >
                                        <MdOutlineCancelPresentation size={22} />
                                        <button className="ms-3">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ChatReqComponent;
