import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { SelectedTimeSlotReqApi, TimeSettingReqApi, TimeSlotReqApi } from "../../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";

function TimeSlot({ groundId }) {
    const token = useSelector((state) => state.turfAdminLogin.token);

    const [state, setState] = useState([]);
    const [booked, setBooked] = useState([]);
    const slotsArray = [];
    const selected = [];

    useEffect(() => {
        timeSlot();
    }, [""]);
    const timeSlot = async () => {
        const response = await TimeSlotReqApi(token);
        if (response.status === 201) {
            setState(response.data.result);
            bookSlot();
        }
    };
    const bookSlot = async (id) => {
        const response = await SelectedTimeSlotReqApi({ groundId: groundId, slotId: id }, token);
        if (response.status === 200) {
            setBooked(response.data.result);
        }
    };
    const cancelSlot = async (id) => {
        message.warning("Canceled slot");
        await bookSlot(id);
        slotsArray.pop(id);
    };
    const handleSelect = async (id) => {
        const compare = slotsArray.includes(id);

        compare === false ? slotsArray.push(id) : cancelSlot(id);
        if (compare === false) {
            bookSlot(id);
        }
    };
    return (
        <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <BiTime size={20} color="green" />
                <span className="tracking-wide">Time</span>
            </div>
            <ul className="list-inside space-y-2">
                {state.length === 0 ? (
                    <div>Please wait</div>
                ) : (
                    <div className="grid grid-cols-4 content-center gap-1">
                        {state.map((res) => {
                            return (
                                <>
                                    {booked.includes(res.index) ? (
                                        <div
                                            className="bg-green-400 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                            key={res.index}
                                            onClick={() => handleSelect(res.index)}
                                        >
                                            {res.time}
                                        </div>
                                    ) : (
                                        <div
                                            className="bg-gray-100 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                            key={res.index}
                                            onClick={() => handleSelect(res.index)}
                                        >
                                            {res.time}
                                        </div>
                                    )}
                                    {/* <div
                                        className="bg-gray-100 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                        key={res.index}
                                        onClick={() => handleSelect(res.index)}
                                    >
                                        {res.time}
                                    </div> */}
                                </>
                            );
                        })}
                    </div>
                )}
            </ul>
        </div>
    );
}

export default TimeSlot;
