import React, { useEffect, useState } from "react";
import { notificationReqApi } from "../../../API/Services/AdminRequest";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";

function InboxPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await notificationReqApi()
            .then((data) => setList(data.data.result))
            .catch((err) => console.log(err));
    };
    const handleApprove = () => {
        console.log("handle approve");
    };
    const handleCancel = () => {
        console.log("handle cancel");
    };

    return (
        <div>
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
                            <div className="bg-green-600 text-white flex py-2 px-4 me-3 rounded" onClick={handleApprove}>
                                <MdFileDownloadDone size={22} />
                                <button className="ms-3">Approve</button>
                            </div>
                            <div className="bg-red-600 text-dark flex py-2 px-4 ms-3 rounded" onClick={handleCancel}>
                                <MdOutlineCancelPresentation size={22} />
                                <button className="ms-3">Cancel</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default InboxPage;
