import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookingListReqApi, BookingStatusSetReqApi, PaymentStatusSetReqApi } from "../../../API/Services/TurfAdminRequest";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Loader from "../Layout/Loader";

function BookingComponent() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const bookingListData = async () => {
        setLoader(true);
        const response = await BookingListReqApi(token);
        if (response.data.result) {
            setData(response.data.result[0]);
            setLoader(false);
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

    const handleBook = async () => {
        navigate("/turf-admin/add-booking");
    };

    useEffect(() => {
        if (token) {
            bookingListData();
        }
    }, [token]);

    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                <Breadcrumb.Item>Bookings</Breadcrumb.Item>
            </Breadcrumb>
            <div className="pt-5">
                {loader && <Loader />}
                <div onClick={handleBook}>
                    <button className="ms-3 px-3 py-2 text-dark bg-amber-500 rounded text-sm font-bold uppercase">
                        Add Booking
                    </button>
                </div>
                {data?.length > 0 ? (
                    data?.map((res) => {
                        return (
                            <div key={res?._id} className="bg-gray-100 rounded w-full lg:max-w-full lg:flex m-3">
                                <div className=" p-4 flex justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">{res?.turf?.name}</div>
                                        <div className="text-gray-900 font-normal text-md mb-2">
                                            {res?.event?.groundName}
                                        </div>
                                        <table className="min-w-max w-full table-auto">
                                            <thead>
                                                <tr className="text-gray-600 uppercase text-sm leading-normal">
                                                    <th className="py-3 px-6 text-left">Name</th>
                                                    <th className="py-3 px-6 text-center">Time</th>
                                                    <th className="py-3 px-6 text-center">Date</th>
                                                    <th className="py-3 px-6 text-center">Sport</th>
                                                    <th className="py-3 px-6 text-center">total</th>
                                                    <th className="py-3 px-6 text-center">Booking Model</th>
                                                    <th className="py-3 px-6 text-center">Payment status</th>
                                                    <th className="py-3 px-6 text-center">Booking status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600 text-sm font-light">
                                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6 text-left">
                                                        <div className="flex items-center">
                                                            <div className=" text-center">
                                                                <span className="font-medium ">
                                                                    {res?.client?.name || res?.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center font-semibold">
                                                        <div className="text-center">
                                                            {res.time.map((response) => {
                                                                return <div className="flex">{response?.slots}</div>;
                                                            })}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center font-semibold">
                                                        <div className="items-center justify-center">
                                                            {new Date(res.bookDate).toDateString()}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center font-semibold">
                                                        <div className="items-center justify-center">{res?.sport}</div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="text-center">
                                                            <span className="font-medium text-lg">{res?.total}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className="text-center">
                                                            <span className="font-medium text-md">{res?.bookingType}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-6 text-center">
                                                        <div className=" text-center">
                                                            {res?.payment ? (
                                                                <span className="font-medium ">{res?.payment}</span>
                                                            ) : (
                                                                <select
                                                                    onClick={(e) =>
                                                                        handlePayment({
                                                                            id: res?._id,
                                                                            value: e.target.value,
                                                                        })
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
                                                            {res?.status ? (
                                                                <span className="font-medium ">{res?.status}</span>
                                                            ) : (
                                                                <select
                                                                    onClick={(e) =>
                                                                        handleBooking({
                                                                            id: res?._id,
                                                                            value: e.target.value,
                                                                        })
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
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <section class="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
                            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    class="w-40 h-40 dark:text-gray-600"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                                    ></path>
                                    <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                                    <polygon
                                        fill="currentColor"
                                        points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                                    ></polygon>
                                    <polygon
                                        fill="currentColor"
                                        points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                                    ></polygon>
                                </svg>
                                <p class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold uppercase">
                                    Looks like no one ordered yet
                                </p>
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookingComponent;
