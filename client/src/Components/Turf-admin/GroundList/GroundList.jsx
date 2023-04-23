import React, { useEffect, useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GroundListReqApi } from "../../../API/Services/TurfAdminRequest";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { message } from "antd";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";

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
            if (response.status === 201) {
                setState(response.data.result);
            } else {
                message.error("No response in list req");
            }
        });
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
            <div className="">
                <div class="container my-12 mx-auto px-4 md:px-12">
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        {state.map((res) => {
                            return (
                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    <ListCard res={res} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TurfGroundListPage;
