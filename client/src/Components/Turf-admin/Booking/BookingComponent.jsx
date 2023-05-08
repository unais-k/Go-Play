import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookingListReqApi, BookingStatusSetReqApi, PaymentStatusSetReqApi } from "../../../API/Services/TurfAdminRequest";
import { GrView } from "react-icons/gr";
import { TbLockOpen, TbLockOpenOff } from "react-icons/tb";
import { BiAperture } from "react-icons/bi";

function BookingComponent() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const [data, setData] = useState([]);
    const [payment, setPayment] = useState("");
    const [booking, setBooking] = useState("");
    const bookingListData = async () => {
        const response = await BookingListReqApi(token);
        if (response.data.result) {
            setData(response.data.result[0]);
        }
    };

    const handlePayment = async (id) => {
        if (id.value === "Pending") {
            return false;
        } else {
            const change = async () => {
                const response = await PaymentStatusSetReqApi(id, token);
                if (response.status === 201) setData(response.data.result);
            };
            change();
        }
    };
    const handleBooking = async (id) => {
        if (id.value === "Pending") {
            return false;
        } else {
            const change = async () => {
                const response = await BookingStatusSetReqApi(id, token);
                if (response.status === 201) setData(response.data.result);
            };
            change();
        }
    };

    useEffect(() => {
        if (token) {
            bookingListData();
        }
    }, [token]);

    return (
        <div class="p-10">
            {data ? (
                data.map((res) => {
                    return (
                        <div class="bg-gray-100 rounded w-full lg:max-w-full lg:flex m-3">
                            <div
                                class="h-48 p-2 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden"
                                title="Mountain"
                            >
                                <img src={res.turf.images[0]} alt="" />
                            </div>
                            <div class=" p-4 flex justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="text-gray-900 font-bold text-xl mb-2">{res.turf.name}</div>
                                    <div class="text-gray-900 font-normal text-md mb-2">{res.event.groundName}</div>
                                    <table className="min-w-max w-full table-auto">
                                        <thead>
                                            <tr className="text-gray-600 uppercase text-sm leading-normal">
                                                <th className="py-3 px-6 text-left">Name</th>
                                                <th className="py-3 px-6 text-center">Time</th>
                                                <th className="py-3 px-6 text-center">Date</th>
                                                <th className="py-3 px-6 text-center">Sport</th>
                                                <th className="py-3 px-6 text-center">total</th>
                                                <th className="py-3 px-6 text-center">Payment status</th>
                                                <th className="py-3 px-6 text-center">Booking status</th>
                                                <th className="py-3 px-6 text-center">View</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-600 text-sm font-light">
                                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                <td className="py-3 px-6 text-left">
                                                    <div className="flex items-center">
                                                        <div className=" text-center">
                                                            <span className="font-medium ">{res.client.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center whitespace-nowrap">
                                                    <div className="text-center">
                                                        {res.time.map((response) => {
                                                            return <div className="flex">{response.slots}</div>;
                                                        })}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center font-bold">
                                                    <div className="items-center justify-center">
                                                        {new Date(res.bookDate).toDateString()}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center font-bold">
                                                    <div className="items-center justify-center">{res.sport}</div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className="text-center">
                                                        <span className="font-medium text-xl">{res.total}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className=" text-center">
                                                        {res.payment ? (
                                                            <span className="font-medium ">{res.payment}</span>
                                                        ) : (
                                                            <select
                                                                onClick={(e) =>
                                                                    handlePayment({ id: res._id, value: e.target.value })
                                                                }
                                                                className="rounded border-0"
                                                                data-te-select-init
                                                                data-te-select-visible-options="3"
                                                            >
                                                                <option value="Pending">Pending</option>
                                                                <option value="Confirm">Confirm</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                            </select>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className=" text-center">
                                                        {res.status ? (
                                                            <span className="font-medium ">{res.status}</span>
                                                        ) : (
                                                            <select
                                                                onClick={(e) =>
                                                                    handleBooking({ id: res._id, value: e.target.value })
                                                                }
                                                                className="rounded border-0"
                                                                data-te-select-init
                                                                data-te-select-visible-options="3"
                                                            >
                                                                <option value="Pending">Pending</option>
                                                                <option value="Completed">Completed</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                            </select>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-6 text-center">
                                                    <div className=" text-center">
                                                        <span className="font-medium ">
                                                            <BiAperture size={23} />
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
}

export default BookingComponent;
