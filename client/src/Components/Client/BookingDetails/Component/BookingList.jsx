import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiFillFolderOpen } from "react-icons/ai";
import { CancelBookingReqApi, UserBookingDetailFetchReqApi } from "../../../../API/Services/ClientRequest";
import { useNavigate } from "react-router-dom";

function BookingList() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.userLogin.token);
    const [bookings, setBookings] = useState([]);
    const [ground, setGround] = useState([]);
    const [event, setEvent] = useState([]);

    const data = async () => {
        const response = await UserBookingDetailFetchReqApi(token);
        // console.log(response.data)
        if (response.status === 201) {
            console.log(response.data.result);
            setBookings(response.data.result);
        }
    };

    useEffect(() => {
        token && data();
    }, [token]);

    const handleSelectView = (id) => {
        navigate(`/booking-view/${id}`);
    };

    const handleCancel = async (id) => {
        const response = await CancelBookingReqApi(id, token);
        if (response.status === 201) {
            setBookings(response.data.result);
        }
    };

    return (
        <div>
            <div className="text-lime-600 font-semibold text-2xl mb-5">My Bookings</div>
            <div>
                <div class="">
                    <div class="overflow-x-auto">
                        <div class="min-w-screen  rounded ps-5 justify-center  font-sans overflow-hidden">
                            <div class="w-full ">
                                {bookings.length > 0 ? (
                                    <div class="bg-white shadow-md rounded my-6 h-96 overflow-auto ">
                                        <table class="relative min-w-max w-full table-auto">
                                            <thead className="">
                                                <tr class="bg-gray-200 rounded text-gray-600 uppercase text-sm leading-normal">
                                                    <th class="py-3 px-6 text-left">Turf Name</th>
                                                    <th class="py-3 px-6 text-center">Sport Selected</th>
                                                    <th class="py-3 px-6 text-center">Date</th>
                                                    <th class="py-3 px-6 text-center">Time</th>
                                                    <th class="py-3 px-6 text-center">View</th>
                                                    <th class="py-3 px-6 text-center">Cancel</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-gray-600 text-sm font-light">
                                                {bookings?.length > 0 &&
                                                    bookings?.map((state) => {
                                                        return (
                                                            <>
                                                                <tr class="border-b rounded border-gray-200 hover:bg-gray-100">
                                                                    <td class="py-3 px-6 text-left whitespace-nowrap">
                                                                        <div class="flex items-center">
                                                                            <span class="font-medium">
                                                                                {state?.turf?.name}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="py-3 px-6 text-left">
                                                                        <div class="flex font-medium items-center">
                                                                            <div class="mr-2"></div>
                                                                            <span>{state?.sport}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="py-3 px-6 text-center">
                                                                        <div class="flex items-center justify-center">
                                                                            {new Date(state?.bookDate).toDateString()}
                                                                        </div>
                                                                    </td>
                                                                    <td class="py-3 px-6 text-center">
                                                                        <div class="font-medium items-center">
                                                                            {state?.time?.map((res) => {
                                                                                return (
                                                                                    <>
                                                                                        <div className="flex flex-col">
                                                                                            {res?.slots}
                                                                                        </div>
                                                                                    </>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </td>
                                                                    <td class=" text-center">
                                                                        <div
                                                                            onClick={() => handleSelectView(state._id)}
                                                                            class="flex item-center justify-center"
                                                                        >
                                                                            <AiFillFolderOpen size={23} />
                                                                        </div>
                                                                    </td>
                                                                    <td class="py-3 px-6 text-center">
                                                                        {state?.bookingStatus ? (
                                                                            <div
                                                                                onClick={() =>
                                                                                    handleCancel({ id: state._id })
                                                                                }
                                                                                class=" font-medium px-3 py-2 bg-red-500 items-center"
                                                                            >
                                                                                <span className="">Cancel</span>
                                                                            </div>
                                                                        ) : (
                                                                            <div class=" font-medium items-center">
                                                                                <div class="mr-2"></div>
                                                                                <span>{state?.status}</span>
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
                </div>
            </div>
        </div>
    );
}

export default BookingList;
