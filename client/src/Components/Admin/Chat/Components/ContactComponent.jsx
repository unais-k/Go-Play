import React, { useEffect, useState } from "react";

function ContactComponent({ handleStartChat, conversation, socket, setCurrentChat }) {
    const [color, setColor] = useState(-1);

    return (
        <>
            {conversation?.map((res, i) => {
                console.log(res);
                return (
                    <>
                        {res?.users[0]?.members[1] === res._id ? (
                            <div
                                onClick={() => {
                                    setCurrentChat(res.users[0]._id);
                                    setColor(res.users[0]._id);
                                    socket?.emit("join room", res.users[0]._id);
                                }}
                                class={`flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400 ${
                                    res.users[0]._id === color ? "bg-blue-400" : "bg-white"
                                }`}
                            >
                                <div class="w-1/4">
                                    <img src={res?.profile} class="object-cover h-12 w-12 rounded-full" alt="" />
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
                                    <img src={res?.profile} class="object-cover h-12 w-12 rounded-full" alt="" />
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
