import React, { useEffect, useState } from "react";
import { AdminPermissionReqApi, GetConversationListReqApi } from "../../../../API/Services/ConversationRequest";
import { useSelector } from "react-redux";
import TurfAdminLogin from "./../../../../Pages/Turf-Admin/Login";
import { message } from "antd";
import RequestModal from "./ReqModal";

function ContactComponent({ owner, setCurrentChat }) {
    const token = useSelector((state) => state.turfAdminLogin.token);

    const [conversation, setConversation] = useState([]);
    const [reqModal, setReqModal] = useState(false);

    const conversationList = async () => {
        const response = await GetConversationListReqApi(token);
        setConversation(response.data.result);
    };

    const handleStartChat = async (id) => {
        const response = await AdminPermissionReqApi(token);
        if (response.status === 201) {
            message.success("Request send");
        }
        if (response.status === 203) {
            setReqModal((state) => !state);
        }
        if (response.status === 202) {
            setCurrentChat(id);
        }
    };

    useEffect(() => {
        console.log(44);
        if (token) conversationList();
    }, [token]);

    return (
        <>
            {owner.length > 0 ? (
                <>
                    {owner.map((res) => {
                        return (
                            <>
                                {conversation.length > 0 ? (
                                    <>
                                        {conversation?.map((c) =>
                                            (c.members[0], console.log(c.members[0], "meme")) !=
                                            (res._id, console.log(res._id, "res")) ? (
                                                <div
                                                    onClick={() => setCurrentChat(c._id)}
                                                    className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                                                >
                                                    <div className="w-1/4">
                                                        <img
                                                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                                            className="object-cover h-12 w-12 rounded-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="w-full">
                                                        <div className="text-lg font-semibold">Admin</div>
                                                        <span className="text-gray-500 text-xs"></span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={() => handleStartChat(c._id)}
                                                    className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                                                >
                                                    <div className="w-1/4">
                                                        <img
                                                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                                            className="object-cover h-12 w-12 rounded-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>{reqModal && <RequestModal setReqModal={setReqModal} />}</div>
                                                    <div className="w-full">
                                                        <div className="text-lg font-semibold">Admin</div>
                                                        <span className="text-gray-500 text-xs">Start Chat by Taping</span>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        );
                    })}
                </>
            ) : (
                <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                    <div className="w-1/4">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            className="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="w-full">
                        <div className="text-lg font-semibold">MERN Stack</div>
                        <span className="text-gray-500">Lusi : Thanks Everyone</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactComponent;
