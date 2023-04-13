import React, { useEffect, useState } from "react";
import { notificationReqApi, turfAdminApproveReq } from "../../../API/Services/AdminRequest";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function InboxPage() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(() => {
        getUser();
    }, [list && ""]);

    const getUser = async () => {
        await notificationReqApi()
            .then((data) => setList(data.data.result))
            .catch((err) => console.log(err));
    };
    const handleApprove = async (e) => {
        const response = await turfAdminApproveReq(e);

        if (response.status === 200) {
            await getUser();
            message.success(`You have approved ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };

    const handleCancel = async (e) => {
        const response = await turfAdminApproveReq(e);

        if (response.status === 200) {
            await getUser();
            message.warning(`You have canceled ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };

    return (
        <div>
            <div>
                <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase">Notification</h1>
            </div>
            <div className="flex flex-wrap">
                {list.map((res) => {
                    return (
                        <div className="max-w-sm m-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {res.name}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email : {res.email}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone : {res.phone}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aadhar : {res.aadhar}</p>
                            <div className="flex">
                                <div
                                    className="bg-green-600 text-white flex py-2 px-4 me-3 rounded"
                                    onClick={() => handleApprove({ id: res._id })}
                                >
                                    <MdFileDownloadDone size={22} />
                                    <button className="ms-3">Approve</button>
                                </div>
                                <div
                                    className="bg-red-600 text-dark flex py-2 px-4 ms-3 rounded"
                                    onClick={() => handleCancel({ id: res._id })}
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

export default InboxPage;
