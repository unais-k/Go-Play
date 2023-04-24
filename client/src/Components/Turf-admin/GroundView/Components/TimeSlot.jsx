import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { CancelTimeReqApi, SelectedTimeReqApi } from "../../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";

function TimeSlot({ eventData, movingDiv, time }) {
    const token = useSelector((state) => state.turfAdminLogin.token);

    const [slots, setSlots] = useState([]);

    const handleCancel = async (id) => {
        const response = await CancelTimeReqApi({ id: id, groundId: eventData._id }, token);
        if (response.status === 200) {
            setSlots(response.data.result);
            message.warning("Slot canceled");
        } else {
            message.error("Something went wrong");
        }
    };

    const handleSelect = async (id) => {
        const response = await SelectedTimeReqApi({ id: id, groundId: eventData._id }, token);
        if (response.status === 200) {
            setSlots(response.data.result);
            message.success("Slot selected");
        } else {
            message.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (eventData && time) {
            setSlots(time);
        }
        console.log(111);
    }, [eventData]);

    return (
        <div ref={movingDiv}>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <BiTime size={20} color="green" />
                <span className="tracking-wide">Time</span>
            </div>
            <ul className="list-inside space-y-2">
                {time?.length === 0 ? (
                    <div>Please wait</div>
                ) : (
                    <div className="grid grid-cols-4 content-center gap-3">
                        {time?.map((res) => {
                            return (
                                <>
                                    {res.status === true ? (
                                        <div
                                            className="m-2 bg-green-300 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                            key={res.index}
                                            onClick={() => handleCancel(res._id)}
                                        >
                                            {res.time}
                                        </div>
                                    ) : (
                                        <div
                                            className=" me-2 bg-gray-100 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                            key={res.index}
                                            onClick={() => handleSelect(res._id)}
                                        >
                                            {res.time}
                                        </div>
                                    )}
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
