import React, { useEffect, useState } from "react";
import { Breadcrumb, Sidebar } from "flowbite-react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Filter from "./Filter";
import { BiSearch } from "react-icons/bi";

import { GroundListReqApi, SearchGroundReqApi } from "../../../API/Services/ClientRequest";
import { Skeleton, message } from "antd";
import { FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ClientCard from "../Layout/ClientCard";

function TurfPage() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const [state, setState] = useState([]);
    useEffect(() => {
        groundList();
    }, []);
    const groundList = async () => {
        const response = await GroundListReqApi();
        if (response.status === 200) {
            setState(response.data.result);
        } else {
            message.error("Something went wrong");
        }
    };
    const handleView = async (id) => {
        navigate("/ground-view", { state: { data: id } });
    };
    const APIcall = async (id) => {
        const response = await SearchGroundReqApi(id);
        if (response.status === 201) {
            setState(response.data.result);
        }
    };

    const handleSearch = async (e) => {
        APIcall(e.target.value);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-11/12">
                <Breadcrumb
                    aria-label="Solid background breadcrumb example"
                    className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
                >
                    <Breadcrumb.Item href="#" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Mumbai</Breadcrumb.Item>
                    <Breadcrumb.Item>Football</Breadcrumb.Item>
                </Breadcrumb>
                <div className="flex">
                    <div className="list-none ">
                        <Filter />
                    </div>
                    <div className="listing w-full">
                        <div className="search-bar justify-center items-center flex flex-col pt-3">
                            <p className="text-lime-600 text-sm font-bold">
                                Search for the best turf grounds, indoor courts grounds in your city
                            </p>
                            <div className="flex mt-3">
                                <input
                                    type="search"
                                    onChange={handleSearch}
                                    // value={searchValue}
                                    placeholder="Search"
                                    className="ms-3 placeholder-white bg-green-700 pe-48"
                                />
                                <div className="px-4 bg-amber-500">
                                    <BiSearch size={30} className="mt-2" color="white" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-lime-600 text-left mt-5 mb-3">Football</h1>
                        </div>
                        <div className="border-b my-5"></div>

                        <div className="card-list">
                            {state
                                ? state.map((res) => {
                                      return <ClientCard res={res} />;
                                  })
                                : "Not found any"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TurfPage;
