import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EventBookingDetailViewReqApi } from "../../../../../API/Services/ClientRequest";
import { AiFillFolderOpen } from "react-icons/ai";

function ViewComponent() {
    const token = useSelector((state) => state.userLogin.token);
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    const [events, setEvents] = useState([]);
    const params = useParams();
    const id = params.id;
    const FullDetails = async () => {
        const response = await EventBookingDetailViewReqApi(id, token);

        if (response.status === 201) {
            setDetails(response.data.result);
            setEvents(response.data.events);
        }
    };
    useEffect(() => {
        if (token) FullDetails();
    }, [token]);

    const handleSelectView = (id) => {
        navigate(`/booking-view/${id}`);
    };

    return (
        <div>
            <div className=" my-5 p-5">
                <div className="w-full no-wrap md:-mx-2 ">
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        <div className="bg-white w-full p-3 shadow-sm rounded-sm">
                            <div className=" space-x-2 font-semibold text-gray-900 leading-8">
                                <div className="flex">
                                    <span className=" text-green-500">
                                        <svg
                                            className="h-5"
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
                                    <span className="tracking-wide">About</span>
                                </div>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Ground Name : </div>
                                        <div className="px-4 py-2">{details[0]?.turf?.name}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Sport Selected</div>
                                        <div className="px-4 py-2">{details[0]?.sport}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Starting Date</div>
                                        <div className="px-4 py-2">{new Date(details[0]?.bookDate).toDateString()}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Ending Date</div>
                                        <div className="px-4 py-2">{new Date(details[0]?.bookDate).toDateString()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-4"></div>
                    </div>
                </div>
                <div class="w-full ">
                    {events.length > 0 ? (
                        <div class="bg-white shadow-md rounded my-6 h-96 overflow-auto ">
                            <table class="relative min-w-max w-full table-auto">
                                <thead className="">
                                    <tr class="bg-gray-200 rounded text-gray-600 uppercase text-sm leading-normal">
                                        {/* <th class="py-3 px-6 text-left">Turf Name</th> */}
                                        {/* <th class="py-3 px-6 text-center">Sport Selected</th> */}
                                        <th class="py-3 px-6 text-center">Date</th>
                                        <th class="py-3 px-6 text-center">Time</th>
                                        <th class="py-3 px-6 text-center">View</th>
                                        <th class="py-3 px-6 text-center">Cancel</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    {events?.length > 0 &&
                                        events?.map((state) => {
                                            return (
                                                <>
                                                    <tr class="border-b rounded border-gray-200 hover:bg-gray-100">
                                                        <td class="py-3 px-6 text-center">
                                                            <div class="flex items-center justify-center">
                                                                {new Date(state.bookDate).toDateString()}
                                                            </div>
                                                        </td>
                                                        <td class="py-3 px-6 text-center">
                                                            <div class="font-medium items-center">
                                                                {state.time.map((res) => {
                                                                    return (
                                                                        <>
                                                                            <div className="flex flex-col">{res.slots}</div>
                                                                        </>
                                                                    );
                                                                })}
                                                            </div>
                                                        </td>
                                                        <td class="py-3 px-6 text-center">
                                                            <div
                                                                onClick={() => handleSelectView(state._id)}
                                                                class="flex item-center justify-center"
                                                            >
                                                                <AiFillFolderOpen size={23} />
                                                            </div>
                                                        </td>
                                                        <td class="py-3 px-6 text-left">
                                                            {state.status ? (
                                                                <div class="flex font-medium items-center">
                                                                    <div class="mr-2"></div>
                                                                    <span>{state.status}</span>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    // onClick={() =>
                                                                    //     handleCancel({ id: state._id })
                                                                    // }
                                                                    class="flex bg-red-500 text-white font-medium items-center"
                                                                >
                                                                    <div class="px-3 py-2 ms-2">Cancel</div>
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <span> No Booking has done yet!...</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewComponent;
