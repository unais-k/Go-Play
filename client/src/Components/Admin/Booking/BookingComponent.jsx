import React, { useEffect, useState } from "react";
import { BiAperture } from "react-icons/bi";
import { FetchAllBookingsReqApi } from "../../../API/Services/AdminRequest";
import { useSelector } from "react-redux";
import TableComponent from "./Components/TableComponent";
import ListCard from "./Components/ListCard";
import { useNavigate } from "react-router-dom";

function BookingComponent() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.adminLogin.token);
    const [data, setData] = useState([]);
    const [event, setEvent] = useState([]);

    const fullData = async () => {
        const response = await FetchAllBookingsReqApi(token);
        if (response.status === 201) {
            setData(response.data.result);
            setEvent(response.data.event);
        }
    };
    const handleView = (id) => {
        console.log(id);
        navigate("/admin/offer-view/" + id);
    };

    useEffect(() => {
        if (token) {
            fullData();
        }
    }, [token]);
    return (
        <div className="px-10">
            <div>
                {event?.length > 0 ? (
                    <>
                        <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase mb-10">
                            Offer Bookings
                        </h1>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div>
                {event?.map((res) => {
                    console.log(res);
                    return (
                        <div onClick={() => handleView(res.client._id)}>
                            <ListCard event={res} />
                        </div>
                    );
                })}
            </div>
            <div className="mt-16">
                {data?.length > 0 ? (
                    <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase">Bookings</h1>
                ) : (
                    <></>
                )}
            </div>
            {data?.map((res) => {
                return (
                    <>
                        <div className="bg-gray-100 rounded w-full lg:max-w-full lg:flex m-3">
                            <div
                                className="h-48 p-2 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden"
                                title="Mountain"
                            >
                                <img src={res.turf.images} alt="" />
                            </div>
                            <div className=" p-4 flex justify-between leading-normal">
                                <TableComponent data={res} />
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default BookingComponent;
