import React, { useEffect, useState } from "react";
import { GroundViewReqApi, TimeSlotReqApi } from "../../../API/Services/ClientRequest";
import { useLocation, useParams } from "react-router-dom";
import { message } from "antd";
import { AiFillStar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function GroundViewPage() {
    const location = useLocation();
    const { id } = useParams();
    const [state, setState] = useState([]);
    const [sport, setSport] = useState([]);
    const [groundTime, setGroundTime] = useState([]);
    const [time, setTime] = useState([]);
    const [date, setDate] = useState(new Date());
    const [booked, setBooked] = useState([]);
    const selected = [];
    useEffect(() => {
        if (id) {
            GroundData();
            timeSlot();
        } else {
            console.log("use");
        }
    }, [id]);
    const timeSlot = async () => {
        const response = await TimeSlotReqApi();
        if (response.status === 201) {
            console.log(response);
            setTime(response.data.result);
        } else {
            message.error("Something went wrong");
        }
    };
    const GroundData = async () => {
        const response = await GroundViewReqApi(id);

        if (response.status === 200) {
            setState(response.data.result);
            setSport(response.data.result.sport);
            setGroundTime(response.data.result.slots);
        } else {
            message.error("Something went wrong");
        }
    };

    const Ground = [
        { title: "Ground 1", type: "Out Door", size: "6 * 6" },
        { title: "Ground 1", type: "Out Door", size: "6 * 6" },
        { title: "Ground 1", type: "Out Door", size: "6 * 6" },
        { title: "Ground 1", type: "Out Door", size: "6 * 6" },
    ];
    const cancelSlot = async (id) => {
        message.warning("Canceled slot");
        selected.pop(id);
    };

    const handleBooking = async (id) => {
        console.log(id);
        const compare = selected.includes(id);
        compare === false ? selected.push(id) : cancelSlot(id);
        // if (compare === false) {
        // }
        console.log(selected, "selected");
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-9/12">
                <div>
                    <h1 className="text-3xl font-bold text-lime-600 my-3">{state.name} -by Go Play</h1>
                </div>
                <div className="flex">
                    <div className="w-9/12 flex flex-col">
                        <div className="">
                            <img className="w-full h-full" src={state.images} alt="image of turf" />
                        </div>
                        <div className="h-52 w-full flex mt-3">
                            <marquee behavior="alternate" direction="left">
                                <div className="flex ms-3 ">
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src="/box-img.jpg" alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src="/box-img.jpg" alt="" />
                                </div>
                            </marquee>
                        </div>
                    </div>
                    <div className="w-6/12">
                        <div className="text-left m-3">
                            <p className="pt-3 mb-3">
                                {state.address}
                                {state.place},{state.nearCity}
                            </p>
                            <p className="mb-3 flex text-amber-500">
                                <div className="flex w-fit px-3 py-0.5 ms-2 bg-green-700 text-white me-3">
                                    <AiFillStar className="pt-1" size={20} color="white" />0
                                </div>
                                write review
                            </p>
                            <p>Dial :{state.phone}</p>
                        </div>
                        <div>
                            <button className="bg-amber-500 text-white px-4 py-2 m-4">Book now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-lime-600 text-2xl font-bold">Step 1: Select Sport</div>
                    <div className="flex">
                        {sport.map((res) => {
                            return <div className="bg-gray-200 px-4 py-2 m-2 mb-10">{res}</div>;
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-lime-600 text-2xl font-bold">Step 2: Select Ground</div>
                    <div className="flex">
                        {Ground.map((res) => {
                            return (
                                <div className="flex flex-col w-fit bg-gray-300 m-3 p-3">
                                    <div className="mb-3">{res.title}</div>
                                    <div>{res.type}</div>
                                    <div>{res.size}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <div className="text-lime-600 text-2xl font-bold mt-5">Step 3: Select Time</div>
                    <div>
                        <DatePicker className="mt-5" selected={date} onChange={(date) => setDate(date)} />
                    </div>
                    <div className="flex flex-wrap my-10 w-6/12">
                        {time.length > 0 &&
                            time.map((res) => {
                                return (
                                    <div className="m-2">
                                        {selected.includes(res.index) && groundTime.includes(res.index) ? (
                                            <div
                                                className="bg-red-300 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                onClick={() => handleBooking(res.index)}
                                            >
                                                Booked
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() => handleBooking(res.index)}
                                                className="bg-gray-100 transition py-1 w-fit px-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                            >
                                                {res.time}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundViewPage;
