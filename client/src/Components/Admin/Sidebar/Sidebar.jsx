import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { MdAnalytics, MdAdminPanelSettings, MdSettings } from "react-icons/md";
import { BiFootball, BiLogOut } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";

function SidebarPage() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            <div className="flex">
                <div className={` ${open ? "w-72" : "w-20 "} bg-blue-500 h-screen p-5  pt-8 relative duration-300`}>
                    <img
                        src="./../control.png"
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
                            !open && "rotate-180"
                        }`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <img
                            src="./../logo-no-background.png"
                            className={`cursor-pointer duration-500 h-fit w-14 ${open && "rotate-[360deg]"}`}
                        />
                        <h1
                            className={`text-white origin-left inline-block font-medium w-fit text-xl duration-200 ${
                                !open && "scale-0"
                            }`}
                        >
                            Go-Play
                        </h1>
                    </div>
                    <ul className="pt-6">
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <MdAnalytics size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Dashboard</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <IoIosNotifications size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Notification</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <BiFootball size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Grounds</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <MdAdminPanelSettings size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Ground-Admin</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <HiUsers size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Customer</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <MdSettings size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Settings</span>
                        </li>
                        <li
                            className={
                                "flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center mt-2 gap-x-4"
                            }
                        >
                            <BiLogOut size={20} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarPage;
