import React, { useEffect, useState } from "react";
import { Breadcrumb, Sidebar } from "flowbite-react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import Filter from "./Filter";
import { BiSearch } from "react-icons/bi";

import { GroundListReqApi } from "../../../API/Services/ClientRequest";
import { message } from "antd";
import { FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TurfPage() {
    const navigate = useNavigate();
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
                                      return (
                                          <div className="flex w-full my-3" onClick={() => handleView(res._id)}>
                                              <div className="me-3 w-3/6">
                                                  <img className="h-44 mx-3 px-3" src={res.images} alt="" />
                                              </div>
                                              <div className="w-3/5 ms-4">
                                                  <div>
                                                      <h1 className="text-amber-500 uppercase font-semibold">{res.name}</h1>
                                                  </div>
                                                  <div className="flex flex-wrap text-sm text-stone-600 mt-2 mb-5">
                                                      <div className="">
                                                          {" "}
                                                          <FaMapPin size={15} color="gray" />
                                                      </div>
                                                      {res.place},{res.nearCity}
                                                  </div>
                                                  <div className="flex w-fit px-3 py-0.5 ms-2 bg-green-700 text-white">
                                                      <AiFillStar className="pt-1" size={20} color="white" />0
                                                  </div>
                                              </div>
                                              <div>
                                                  <button className="bg-amber-500 text-white uppercase font-semibold px-4 py-2 hover:bg-amber-700">
                                                      Book Now
                                                  </button>
                                              </div>
                                          </div>
                                      );
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
