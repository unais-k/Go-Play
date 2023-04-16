import { Breadcrumb } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import ProfileCard from "./Components/ProfileCard";
import AboutComponent from "./Components/AboutComponent";
import { useLocation, useParams } from "react-router-dom";

import { GroundViewReqApi } from "../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";

function GroundViewPage() {
    const location = useLocation();
    // console.log(location.state.id, "  hereee");
    // const data = id.state;
    // console.log(data);
    // const [id, setId] = useState(null);
    // setId(location.state.id);
    // console.log(id, "ïd in state");

    const token = useSelector((state) => state.turfAdminLogin.token);
    const [viewData, setViewData] = useState([]);
    useEffect(() => {
        // groundView();
        console.log("üse effect working");
    }, []);
    const groundView = async () => {
        // const response = await GroundViewReqApi(data, token);
        // console.log(response, "response");
        // setViewData(response);
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
                    <div class="">
                        <div class="container mx-auto my-5 p-5">
                            <div class="md:flex no-wrap md:-mx-2 ">
                                <ProfileCard />
                                <div class="w-full md:w-9/12 mx-2 h-64">
                                    <AboutComponent />

                                    <div class="my-4"></div>

                                    <div class="bg-white p-3 shadow-sm rounded-sm">
                                        <div class="grid grid-cols-2">
                                            <div>
                                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                    <span clas="text-green-500">
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
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span class="tracking-wide">Experience</span>
                                                </div>
                                                <ul class="list-inside space-y-2">
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Owner at Her Company Inc.</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                                    <span clas="text-green-500">
                                                        <svg
                                                            class="h-5"
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
                                                    <span class="tracking-wide">Education</span>
                                                </div>
                                                <ul class="list-inside space-y-2">
                                                    <li>
                                                        <div class="text-teal-600">Masters Degree in Oxford</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                                    </li>
                                                    <li>
                                                        <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                                        <div class="text-gray-500 text-xs">March 2020 - Now</div>
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
