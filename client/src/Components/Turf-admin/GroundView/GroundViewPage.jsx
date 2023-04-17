import { Breadcrumb } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import ProfileCard from "./Components/ProfileCard";
import AboutComponent from "./Components/AboutComponent";
import { useLocation, useParams } from "react-router-dom";

import { GroundViewReqApi } from "../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";
import TimeSlot from "./Components/TimeSlot";

function GroundViewPage() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [viewData, setViewData] = useState([]);
    const objId = useParams();
    const data = objId.id;
    useEffect(() => {
        groundView();
    }, [token]);
    const groundView = async () => {
        const response = await GroundViewReqApi(data, token);
        if (response.status === 201) {
            setViewData(response.data.result);
        } else {
            message.error("Something went wrong");
        }
    };

    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                <Breadcrumb.Item>View</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <div>
                    <div className="">
                        <div className="container mx-auto my-5 p-5">
                            <div className="md:flex no-wrap md:-mx-2 ">
                                <ProfileCard viewData={viewData} />
                                <div className="w-full md:w-9/12 mx-2 h-64">
                                    <AboutComponent />

                                    <div className="my-4"></div>

                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <div className="grid grid-cols-2">
                                            <TimeSlot />
                                            <div>
                                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                    <span className="text-green-500">
                                                        <svg
                                                            className="h-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                            <path
                                                                fill="#fff"
                                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                            />
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="tracking-wide">Education</span>
                                                </div>
                                                <ul className="list-inside space-y-2">
                                                    <li>
                                                        <div className="text-teal-600">Masters Degree in Oxford</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                                        <div className="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundViewPage;
