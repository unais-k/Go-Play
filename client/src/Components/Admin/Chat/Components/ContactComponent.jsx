import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetConversationListReqApi } from "../../../../API/Services/ConversationRequest";

function ContactComponent({ owner, handleStartChat, setCurrentChat }) {
    const token = useSelector((state) => state.adminLogin.token);

    const [conversation, setConversation] = useState([]);

    const conversationList = async () => {
        const response = await GetConversationListReqApi(token);
        setConversation(response.data.result);
    };

    useEffect(() => {
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
                                            c.members[1] === res._id ? (
                                                <div
                                                    onClick={() => setCurrentChat(c._id)}
                                                    class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                                                >
                                                    <div class="w-1/4">
                                                        <img
                                                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                                            class="object-cover h-12 w-12 rounded-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="w-full">
                                                        <div class="text-lg font-semibold">{res.name}</div>
                                                        <span class="text-gray-500 text-xs"></span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={() => handleStartChat({ receiverId: res._id })}
                                                    class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
                                                >
                                                    <div class="w-1/4">
                                                        <img
                                                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                                            class="object-cover h-12 w-12 rounded-full"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="w-full">
                                                        <div class="text-lg font-semibold">{res.name}</div>
                                                        <span class="text-gray-500 text-xs">Start Chat by Taping</span>
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
                <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover h-12 w-12 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class="text-lg font-semibold">MERN Stack</div>
                        <span class="text-gray-500">Lusi : Thanks Everyone</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactComponent;
