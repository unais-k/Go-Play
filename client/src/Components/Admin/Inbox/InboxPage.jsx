import React, { useEffect, useState } from "react";
import { TimeSaveReqApi, notificationReqApi, turfAdminApproveReq } from "../../../API/Services/AdminRequest";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import ChatReqComponent from "./ChatReqComponent";

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
                        <div class="px-5 py-6 flex flex-col justify-center sm:py-12">
                            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                                <div class="absolute inset-0 bg-gradient-to-r to-emerald-600 from-sky-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                                <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                    <div class="max-w-md mx-auto">
                                        <div class="divide-y divide-gray-200">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {res.name}
                                                </h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Email : {res.email}
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Phone : {res.phone}
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Aadhar : {res.aadhar}
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Pan : {res?.pan}
                                            </p>
                                            <div className="flex">
                                                <div
                                                    className="bg-lime-500 text-white flex py-2 px-4 me-3 rounded"
                                                    onClick={() => handleApprove({ id: res._id })}
                                                >
                                                    <MdFileDownloadDone size={22} />
                                                    <button className="ms-3">Approve</button>
                                                </div>
                                                <div
                                                    className="bg-red-500 text-dark flex py-2 px-4 ms-3 rounded"
                                                    onClick={() => handleCancel({ id: res._id })}
                                                >
                                                    <MdOutlineCancelPresentation size={22} />
                                                    <button className="ms-3">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ChatReqComponent />
        </div>
    );
}

export default InboxPage;
