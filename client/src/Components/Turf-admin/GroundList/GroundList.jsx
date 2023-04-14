import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GroundListReqApi } from "../../../API/Services/TurfAdminRequest";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { message } from "antd";
import { useSelector } from "react-redux";

function TurfGroundListPage() {
    const navigate = useNavigate();
    const handleAddGround = () => {
        navigate("/turf-admin/ground-add");
    };
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [state, setState] = useState([]);
    useEffect(() => {
        GroundList();
    }, []);
    const GroundList = async () => {
        await GroundListReqApi(token).then((response) => {
            console.log(response, "list response");
            if (response.status === 201) {
                console.log(response);
                setState(response.data.result);
            } else {
                message.error("No response in list req");
            }
        });
    };

    const handleView = () => {
        navigate("/turf-admin/ground-view");
    };
    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                <Breadcrumb.Item>Ground</Breadcrumb.Item>
            </Breadcrumb>
            <button onClick={handleAddGround} className="bg-green-500 rounded m-3 px-4 py-2">
                Add Ground
            </button>
            <div className="flex">
                {state.map((res) => {
                    return (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
                            <div className="">
                                <img className="w-full h-2/4 rounded" src={res.images} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{res.name}</div>
                                    <p className="text-gray-700 text-base">{res.address}</p>
                                </div>
                                <div className="mx-3 my-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {res.nearCity}
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {res.place}
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {res.groundType}
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        {res.size}
                                    </span>
                                </div>
                                <div
                                    className=" flex bg-black w-fit  text-white m-2 py-3 px-4 rounded"
                                    onClick={handleView}
                                >
                                    <button className="me-3">View</button>
                                    <BsFillArrowRightCircleFill size={23} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TurfGroundListPage;
