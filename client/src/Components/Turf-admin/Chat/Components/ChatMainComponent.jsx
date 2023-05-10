import React, { useEffect, useState } from "react";
import ContactComponent from "./ContactComponent";
import { useSelector } from "react-redux";
import {
    AddMessageReqApi,
    GetAdminListReqApi,
    GetFullMessagesReqApi,
    NewConversationReqApi,
} from "../../../../API/Services/ConversationRequest";
import ChatSideComponent from "./ChatSideComponent";

function ChatMainComponent() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [newMessage, setNewMessage] = useState("");
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [owner, setOwner] = useState([]);

    const getTurfAdmins = async () => {
        const response = await GetAdminListReqApi(token);
        setOwner(response.data.result);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            text: newMessage,
            conversationId: currentChat,
        };

        const response = await AddMessageReqApi(message, token);
    };
    const handleStartChat = async (id) => {
        console.log(id);
        const response = await NewConversationReqApi(id, token);
        console.log(response.data.result);
    };

    const getMessages = async () => {
        const response = await GetFullMessagesReqApi(currentChat, token);
        console.log(response.data.result, "getMessage");
        setConversations(response.data.result);
    };

    useEffect(() => {
        if (currentChat) getMessages();
    }, [currentChat]);

    useEffect(() => {
        if (token) {
            getTurfAdmins();
        }
    }, [token]);
    return (
        <div>
            <div class="container w-full mx-auto shadow-lg border-t rounded-lg">
                <div class="flex w-full h-screen bg-white">
                    <div class="w-full flex pt-20 flex-col w-3/12 border-r-2 overflow-y-auto">
                        <div class="border-b-2 mb-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chatting"
                                class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                            />
                        </div>
                        <ContactComponent owner={owner} setCurrentChat={setCurrentChat} handleStartChat={handleStartChat} />
                    </div>

                    <div class="flex flex-col w-full flex-auto h-full p-6">
                        <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                            <div class="flex flex-col h-full overflow-x-auto mb-4">
                                <div class="flex flex-col h-full">
                                    <ChatSideComponent />
                                </div>
                            </div>
                            <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                                <div>
                                    <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                                        <svg
                                            class="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                                <div class="flex-grow ml-4">
                                    <div class="relative w-full">
                                        <input
                                            type="text"
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            value={newMessage}
                                            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        />
                                        <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                            <svg
                                                class="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <button
                                        onClick={handleSubmit}
                                        class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                    >
                                        <span>Send</span>
                                        <span class="ml-2">
                                            <svg
                                                class="w-4 h-4 transform rotate-45 -mt-px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="ps-10">
                    <div class="w-3/5 justify-center fixed bottom-1 p-10 flex">
                        <input
                            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
                            type="text"
                            placeholder="type your message here..."
                        />

                        <button className="ms-10 rounded uppercase text-xs font-bold bg-blue-500 px-5 py-2">
                            Send
                        </button>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    );
}

export default ChatMainComponent;
