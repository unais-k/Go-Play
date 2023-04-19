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
import DetailsComponent from "./Components/DetailsComponent";
import TodoApp from "./Components/Todo/Todo";

function GroundViewPage() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [viewData, setViewData] = useState([]);
    const objId = useParams();
    const data = objId.id;

    useEffect(() => {
        console.log(7777);
        groundView();
    }, [""]);
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
                                    <AboutComponent viewData={viewData} />

                                    <div className="my-4"></div>

                                    <div className="bg-white p-3 shadow-sm rounded-sm">
                                        <div className="grid grid-cols-2">
                                            <TimeSlot />
                                            <DetailsComponent />
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <div className="text-teal-600 text-sm">Enter rules of your Venue</div>
                                        <TodoApp id={viewData._id} />
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
