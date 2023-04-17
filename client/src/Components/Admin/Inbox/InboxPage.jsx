import React, { useEffect, useState } from "react";
import { TimeSaveReqApi, notificationReqApi, turfAdminApproveReq } from "../../../API/Services/AdminRequest";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";

function InboxPage() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const token = useSelector((state) => state.adminLogin.token);
    useEffect(() => {
        getUser();
    }, [list && ""]);

    const getUser = async () => {
        await notificationReqApi(token)
            .then((data) => setList(data.data.result))
            .catch((err) => console.log(err));
    };
    const handleApprove = async (e) => {
        const response = await turfAdminApproveReq(e, token);

        if (response.status === 200) {
            await getUser();
            message.success(`You have approved ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };

    const handleCancel = async (e) => {
        const response = await turfAdminApproveReq(e, token);

        if (response.status === 200) {
            await getUser();
            message.warning(`You have canceled ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };

    const rows = [
        { index: "0", time: "12.00am", isSelected: false, status: false },
        { index: "1", time: "01.00am", isSelected: false, status: false },
        { index: "2", time: "02.00am", isSelected: false, status: false },
        { index: "3", time: "03.00am", isSelected: false, status: false },
        { index: "4", time: "04.00am", isSelected: false, status: false },
        { index: "5", time: "05.00am", isSelected: false, status: false },
        { index: "6", time: "06.00am", isSelected: false, status: false },
        { index: "7", time: "07.00am", isSelected: false, status: false },
        { index: "8", time: "08.00am", isSelected: false, status: false },
        { index: "9", time: "09.00am", isSelected: false, status: false },
        { index: "10", time: "10.00am", isSelected: false, status: false },
        { index: "11", time: "11.00am", isSelected: false, status: false },
        { index: "12", time: "12.00pm", isSelected: false, status: false },
        { index: "13", time: "01.00pm", isSelected: false, status: false },
        { index: "14", time: "02.00pm", isSelected: false, status: false },
        { index: "15", time: "03.00pm", isSelected: false, status: false },
        { index: "16", time: "04.00pm", isSelected: false, status: false },
        { index: "17", time: "05.00pm", isSelected: false, status: false },
        { index: "18", time: "06.00pm", isSelected: false, status: false },
        { index: "19", time: "07.00pm", isSelected: false, status: false },
        { index: "20", time: "08.00pm", isSelected: false, status: false },
        { index: "21", time: "09.00pm", isSelected: false, status: false },
        { index: "22", time: "10.00pm", isSelected: false, status: false },
        { index: "23", time: "11.00pm", isSelected: false, status: false },
    ];

    // const timeSave = async () => {
    //     const response = await TimeSaveReqApi(rows, token);
    // };

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
