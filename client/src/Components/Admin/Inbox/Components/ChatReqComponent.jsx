import React from "react";
import { MdFileDownloadDone, MdOutlineCancelPresentation } from "react-icons/md";

function ChatReqComponent({ data }) {
    return (
        <>
            <div className="flex flex-wrap">
                {data ? (
                    <div className="max-w-sm m-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {data?.name}
                            </h5>
                        </a>
                        <p>{data?.name}, He would like to chat with you</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone : {data?.sender?.phone}</p>

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
                ) : (
                    <div>No new notification</div>
                )}
            </div>
        </>
    );
}

export default ChatReqComponent;
