import React from "react";
import { format } from "timeago.js";

function MessageComponent({ message, own }) {
    return (
        <div
            class={own ? "flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end" : "flex w-full mt-2 space-x-3 max-w-xs"}
        >
            {own ? <></> : <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>}
            <div>
                <div
                    class={
                        own
                            ? "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
                            : "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"
                    }
                >
                    <p class="text-sm">{message.text}</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">{format(message.createdAt)}</span>
            </div>
            {own ? <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div> : <></>}
        </div>
    );
}

export default MessageComponent;
