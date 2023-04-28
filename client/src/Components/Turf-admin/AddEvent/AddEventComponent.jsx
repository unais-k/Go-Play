import { Breadcrumb } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import TimeSlot from "../GroundView/Components/TimeSlot";
import { useNavigate, useParams } from "react-router-dom";
import { AddEventReqApi, GroundViewReqApi, TimeSaveOnEventReqApi } from "../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";

function AddEventComponent() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.turfAdminLogin.token);
    const params = useParams();
    const [viewData, setViewData] = useState([]);
    const [time, setTime] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [sport, setSport] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        groundName: "",
        size: "",
        type: "",
        price: "",
        priceAtNight: "",
    });
    const groundId = params.id;

    const groundDetails = async () => {
        const response = await GroundViewReqApi(groundId, token);
        return response;
    };

    const handleCheckboxSport = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSport([...sport, value]);
        } else {
            setSport(sport.filter((e) => e !== value));
        }
    };

    const rows = [
        { index: "0", time: "12.00am", isSelected: false, status: false },
        { index: "1", time: "01.00am", isSelected: false, status: false },
        { index: "2", time: "02.00am", isSelected: false, status: false },
        { index: "3", time: "03.00am", isSelected: false, status: false },
        { index: "4", time: "04.00am", isSelected: false, status: false },
        { index: "5", time: "05.00am", isSelected: false, status: false },
        { index: "6", time: "06.00am", isSelected: false, status: false },
        { index: "7", time: "07.00am", isSelected: false, status: false },
        { index: "8", time: "08.00am", isSelected: false, status: false },
        { index: "9", time: "09.00am", isSelected: false, status: false },
        { index: "10", time: "10.00am", isSelected: false, status: false },
        { index: "11", time: "11.00am", isSelected: false, status: false },
        { index: "12", time: "12.00pm", isSelected: false, status: false },
        { index: "13", time: "01.00pm", isSelected: false, status: false },
        { index: "14", time: "02.00pm", isSelected: false, status: false },
        { index: "15", time: "03.00pm", isSelected: false, status: false },
        { index: "16", time: "04.00pm", isSelected: false, status: false },
        { index: "17", time: "05.00pm", isSelected: false, status: false },
        { index: "18", time: "06.00pm", isSelected: false, status: false },
        { index: "19", time: "07.00pm", isSelected: false, status: false },
        { index: "20", time: "08.00pm", isSelected: false, status: false },
        { index: "21", time: "09.00pm", isSelected: false, status: false },
        { index: "22", time: "10.00pm", isSelected: false, status: false },
        { index: "23", time: "11.00pm", isSelected: false, status: false },
    ];
    useEffect(() => {
        if (groundId) {
            groundDetails().then((res) => {
                setViewData(res);
            });
        } else {
            console.log("no id");
        }
    }, [groundId]);
    const title = [
        { titles: "Football" },
        { titles: "Cricket" },
        { titles: "Tennis" },
        { titles: "Basket Ball" },
        { titles: "Volley Ball" },
        { titles: "Badminton" },
    ];
    const type = [{ name: "Turf" }, { name: "Soapy" }, { name: "Grass" }, { name: "Sand" }, { name: "Court" }];
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const size = [
        { name: "5 * 5" },
        { name: "6 * 6" },
        { name: "7 * 7" },
        { name: "8 * 8" },
        { name: "10 * 10" },
        { name: "11 * 11" },
    ];
    const move = () => {
        movingDiv?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.groundName === "" ||
            formData.size === "" ||
            formData.price === "" ||
            formData.priceAtNight === "" ||
            formData.type === ""
        ) {
            message.error("All fields are required");
            return false;
        }
        if (sport.length === 0) {
            message.error("Choose a sport");
        }

        const response = await AddEventReqApi({ groundId: groundId, sport: sport, data: formData, slots: rows }, token);
        console.log(response);
        if (response.status === 201) {
            message.success("Event added");
            setEventData(response.data.result);
            setTime(response.data.result.slots);
            console.log(time);
            move();
        }
    };
    console.log(viewData, time);

    const TimeSaveOnEvent = async () => {
        const response = await TimeSaveOnEventReqApi();
    };
    const movingDiv = useRef(null);

    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                <Breadcrumb.Item>Add Event</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
                    <div class="text-3xl mb-6 text-center ">Ready to build your Dream?</div>

                    <form onSubmit={handleSubmit}>
                        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
                            <div className="col-span-2">
                                <input
                                    type="groundName"
                                    name="groundName"
                                    onChange={handleInputChange}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Ground name"
                                />
                            </div>
                            <div class="col-span-2">
                                <ul className="flex justify-between">
                                    <li className="me-2">
                                        <label className="">
                                            football
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                onClick={handleCheckboxSport}
                                                value="Football"
                                            />
                                        </label>
                                    </li>
                                    <li className="me-2">
                                        <label className="">
                                            cricket
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                value="Cricket"
                                                onClick={handleCheckboxSport}
                                            />
                                        </label>
                                    </li>
                                    <li className="me-2">
                                        <label className="">
                                            volleyball
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                value="Volley ball"
                                                onClick={handleCheckboxSport}
                                            />
                                        </label>
                                    </li>
                                    <li className="me-2">
                                        <label className="">
                                            tennis
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                value="Tennis"
                                                onClick={handleCheckboxSport}
                                            />
                                        </label>
                                    </li>
                                    <li className="me-2">
                                        <label className="">
                                            badminton
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                value="Badminton"
                                                onClick={handleCheckboxSport}
                                            />
                                        </label>
                                    </li>
                                    <li className="me-2">
                                        <label className="">
                                            basketball
                                            <input
                                                className="ms-2"
                                                type="checkbox"
                                                value="Basket ball"
                                                onClick={handleCheckboxSport}
                                            />
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-span-2">
                                <select
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    onChange={handleInputChange}
                                    name="type"
                                >
                                    <option value="">Choose type</option>
                                    {type.map((obj, index) => {
                                        return (
                                            <option key={index + Math.round(Math.random) * 124} value={obj.name}>
                                                {obj.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div class="col-span-2">
                                <select
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    onChange={handleInputChange}
                                    name="size"
                                >
                                    <option value="">Choose size</option>
                                    {size.map((obj, index) => {
                                        return (
                                            <option key={index + Math.round(Math.random) * 124} value={obj.name}>
                                                {obj.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <input
                                    type="price"
                                    name="price"
                                    onChange={handleInputChange}
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Price"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <input
                                    type="priceAtNight"
                                    onChange={handleInputChange}
                                    name="priceAtNight"
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Price at night"
                                />
                            </div>
                            <div className="text-lime-500 text-sm">Submit for Time manage</div>

                            <div class="col-span-2 text-right">
                                <button class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32" type="submit">
                                    Submit
                                </button>
                            </div>
                            <div className="">
                                <TimeSlot mDiv={movingDiv} eventData={eventData} time={time} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEventComponent;
