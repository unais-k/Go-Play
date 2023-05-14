import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetConversationListReqApi } from "../../../../API/Services/ConversationRequest";

function ContactComponent({ handleStartChat, conversation, socket, setCurrentChat }) {
    return (
        <>
            {conversation?.map((res, i) => {
                return (
                    <>
                        {res?.users[0]?.members[1] === res._id ? (
                            <div
                                onClick={() => {
                                    setCurrentChat(res.users[0]._id);
                                    socket?.emit("join room", res.users[0]._id);
                                }}
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
                                onClick={() => handleStartChat(res._id)}
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
                        )}
                    </>
                );
            })}
        </>
    );
}

export default ContactComponent;
