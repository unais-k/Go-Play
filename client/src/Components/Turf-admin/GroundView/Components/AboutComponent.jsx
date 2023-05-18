import React, { useEffect, useState } from "react";
import { AvailableStatusChangeReqApi } from "../../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";

function AboutComponent({ viewData }) {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [toggle, setToggle] = useState(false);
    const date = new Date(viewData.createdAt).toDateString();

    const handleToggle = async () => {
        console.log(viewData.status);
        setToggle((current) => !current);

        const id = viewData._id;
        const response = await AvailableStatusChangeReqApi({ toggle: toggle }, id, token);
        if (response.status === 200) {
            if (response.data.result.status === true) {
                message.success("Venue Available");
            } else {
                message.warning("Venue not available");
            }
        } else {
            message.error("Something went wrong");
        }
    };
    useEffect(() => {
        console.log("UseEffect working");
    }, [toggle]);

    return (
        <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span class="text-green-500">
                    <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </span>
                <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Owner name</div>
                        <div class="px-4 py-2">{viewData?.Owner?.name}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Venue Name</div>
                        <div class="px-4 py-2">{viewData?.name}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">+91{viewData?.phone}</div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Available Status</div>
                        <div class="px-4 py-2">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={viewData?.status}
                                    onClick={handleToggle}
                                    class="sr-only peer"
                                    checked={toggle}
                                />
                                <div class="w-11 h-6 bg-blue-600 peer-focus:outline-none dark:peer-focus:ring-blue-800  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-200"></div>
                            </label>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                            <a class="" href={`mailto:${viewData?.email}`}>
                                {viewData?.email}
                            </a>
                        </div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Created At</div>
                        <div class="px-4 py-2">{date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
