import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useSelector } from "react-redux";
import { EventDetailFetchReqApi } from "../../../API/Services/TurfAdminRequest";
import TimeSlotComponent from "./TimeSlotComponent";

function EditEventComponent() {
    const params = useParams();
    const eventId = params.id;
    console.log(eventId, "id");
    const [eventData, setEventData] = useState([]);
    const [time, setTime] = useState([]);
    const token = useSelector((state) => state.turfAdminLogin.token);

    const eventDetail = async () => {
        const response = await EventDetailFetchReqApi(eventId, token);
        setEventData(response.data.result);
        setTime(response.data.result.slots);
    };
    const size = [
        { name: "5 * 5" },
        { name: "6 * 6" },
        { name: "7 * 7" },
        { name: "8 * 8" },
        { name: "10 * 10" },
        { name: "11 * 11" },
    ];
    const title = [
        { titles: "Football" },
        { titles: "Cricket" },
        { titles: "Tennis" },
        { titles: "Basket Ball" },
        { titles: "Volley Ball" },
        { titles: "Badminton" },
    ];
    const type = [{ name: "Turf" }, { name: "Soapy" }, { name: "Grass" }, { name: "Sand" }, { name: "Court" }];
    useEffect(() => {
        if (params) {
            eventDetail();
        }
    }, [""]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <div>
            <div>
                <Breadcrumb
                    aria-label="Solid background breadcrumb example"
                    className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
                >
                    <Breadcrumb.Item href="#" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit Event</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
                        <form onSubmit={handleSubmit}>
                            <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
                                <div className="col-span-2">
                                    <input
                                        type="groundName"
                                        name="groundName"
                                        defaultValue={eventData.groundName}
                                        // onChange={handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Ground name"
                                    />
                                </div>
                                <div class="col-span-2 lg:col-span-1 ">
                                    <select
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        // onChange={handleInputChange}
                                        name="title"
                                    >
                                        <option value="">Choose Title</option>
                                        {title.map((obj, index) => {
                                            return (
                                                <option key={index + Math.round(Math.random) * 124}>{obj.titles}</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div class="col-span-2 lg:col-span-1">
                                    <select
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        // onChange={handleInputChange}
                                        name="type"
                                    >
                                        <option value="">Choose type</option>
                                        {type.map((obj, index) => {
                                            return <option key={index + Math.round(Math.random) * 124}>{obj.name}</option>;
                                        })}
                                    </select>
                                </div>

                                <div class="col-span-2">
                                    <select
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="text"
                                        // onChange={handleInputChange}
                                        name="size"
                                    >
                                        <option value="">Choose size</option>
                                        {size.map((obj, index) => {
                                            return <option key={index + Math.round(Math.random) * 124}>{obj.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <input
                                        type="price"
                                        defaultValue={eventData.price}
                                        name="price"
                                        // onChange={handleInputChange}
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Price"
                                    />
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <input
                                        type="priceAtNight"
                                        defaultValue={eventData.priceAtNight}
                                        // onChange={handleInputChange}
                                        name="priceAtNight"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Price at night"
                                    />
                                </div>

                                <div class="col-span-2 text-right">
                                    <button
                                        class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                </div>
                                <div className="">
                                    {eventData && time ? <TimeSlotComponent eventData={eventData} time={time} /> : ""}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditEventComponent;
