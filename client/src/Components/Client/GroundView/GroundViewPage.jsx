import React, { useEffect, useRef, useState } from "react";
import {
    EventFetchOnSelectReqApi,
    GroundFetchOnSelectReqApi,
    GroundViewReqApi,
    SelectTypeOfReqApi,
    TimeSlotReqApi,
} from "../../../API/Services/ClientRequest";
import { useLocation, useParams } from "react-router-dom";
import { message } from "antd";
import { AiFillStar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RulesComponent from "./RulesComponent";
import ReviewComponent from "./ReviewComponent";

function GroundViewPage() {
    const location = useLocation();
    const { id } = useParams();
    const [state, setState] = useState([]);
    const [sport, setSport] = useState([]);
    const [time, setTime] = useState([]);
    const [event, setEvent] = useState([]);
    const [eventOnTime, setEventOnTime] = useState([]);
    const [date, setDate] = useState(new Date());

    const [showDiv, setShowDiv] = useState(true);
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(true);

    const [ground, setGround] = useState([]);
    const selected = [];
    useEffect(() => {
        if (id) {
            GroundData();
        } else {
            console.log("use");
        }
        console.log(selected, "select");
    }, [id]);

    useEffect(() => {}, [time]);
    const movingDiv = useRef(null);
    const movingDiv1 = useRef(null);
    const movingDiv2 = useRef(null);

    const bookNow = () => {
        setShowDiv(true);
        movingDiv?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const bookNow1 = () => {
        setShowDiv1(true);
        movingDiv1?.current?.scrollIntoView({ behavior: "smooth" });
    };
    const bookNow2 = () => {
        setShowDiv2(true);
        movingDiv2?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const GroundData = async () => {
        const response = await GroundViewReqApi(id);

        if (response.status === 200) {
            setState(response.data.result);
            setEvent(response.data.events);
        } else {
            message.error("Something went wrong");
        }
    };

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 5);

    const cancelSlot = async (id) => {
        message.warning("Canceled slot");
        selected.pop(id);
    };

    const selectedSlot = async (id) => {
        message.success("Slot added");
    };

    const handleBooking = async (id) => {
        const compare = await selected.includes(id.index);
        console.log(compare);
        compare === false ? selected.push(id) : cancelSlot(id);
    };
    console.log(selected, "select");

    const handleBookNow = async (id) => {
        const response = await SelectTypeOfReqApi(id);
        setSport(response.data.result);
        bookNow();
    };

    const handleSelectedSport = async (id) => {
        const response = await GroundFetchOnSelectReqApi(id);
        if (response.status === 201) {
            setGround(response.data.result);
            bookNow1();
        }
    };

    const handleSelectGround = async (id) => {
        const response = await EventFetchOnSelectReqApi(id);
        setTime(response.data.slots);
        setEventOnTime(response.data.result[0]);
        bookNow2();
    };

    return (
        <div>
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
                                <button
                                    className="bg-amber-500 text-white px-4 py-2 m-4"
                                    onClick={() => handleBookNow(state._id)}
                                >
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>
                    {showDiv && (
                        <div ref={movingDiv}>
                            <div className="text-lime-600 text-2xl font-bold">Step 1: Select Sport</div>
                            <div className="flex">
                                {sport?.map((res) => {
                                    return (
                                        <div
                                            className="bg-gray-200 px-4 py-2 m-2 mb-10"
                                            onClick={() => handleSelectedSport({ value: res, groundId: state._id })}
                                        >
                                            {res}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {showDiv1 && (
                        <div ref={movingDiv1}>
                            <div className="text-lime-600 text-2xl font-bold">Step 2: Select Ground</div>
                            <div className="flex">
                                {ground?.map((res) => {
                                    return (
                                        <div
                                            className="flex flex-col w-fit bg-gray-200 m-3 p-5"
                                            onClick={() => handleSelectGround(res._id)}
                                        >
                                            <div className="mb-3">{res.groundName}</div>
                                            <div>-{res.type}</div>
                                            <div>-{res.size}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {showDiv2 && (
                        <div ref={movingDiv2}>
                            <div className="text-lime-600 text-2xl font-bold mt-5">Step 3: Select Time</div>
                            <div>
                                <DatePicker
                                    minDate={new Date()}
                                    maxDate={maxDate}
                                    className="mt-5"
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                />
                            </div>
                            <div className="flex flex-wrap my-10 w-6/12">
                                {time?.length > 0 &&
                                    time?.map((res, index) => {
                                        return (
                                            <div className="m-2">
                                                {/* {selected.includes(res.index) ? (
                                                    <div
                                                        className="bg-red-300 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                        onClick={() => handleBooking(res._id)}
                                                    >
                                                        Booked
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="bg-green-300 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                        onClick={() => handleBooking(res._id)}
                                                    >
                                                        {res.time}
                                                    </div>
                                                )} */}
                                                {parseInt(res.index) > 17 || parseInt(res.index) < 6 ? (
                                                    <div
                                                        className="flex bg-gray-200 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                        onClick={() =>
                                                            handleBooking({
                                                                id: res.index,
                                                                price: eventOnTime.priceAtNight,
                                                            })
                                                        }
                                                    >
                                                        {res.time}
                                                        <br></br>
                                                        Rs.{eventOnTime.priceAtNight}
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="flex bg-gray-200 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                        onClick={() =>
                                                            handleBooking({ id: res.index, price: eventOnTime.price })
                                                        }
                                                    >
                                                        {res.time}
                                                        <br></br>
                                                        Rs.{eventOnTime.price}
                                                    </div>
                                                )}

                                                {/* <div
                                                    className="flex bg-gray-200 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                                    onClick={() => handleBooking(res.index)}
                                                >
                                                    {res.time}
                                                    {eventOnTime.price}
                                                </div> */}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                    <div>
                        <div>{selected.length}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-9/12">
                    <div className="">
                        <RulesComponent state={state} />
                    </div>
                    <div className="mb-10">
                        <ReviewComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundViewPage;
