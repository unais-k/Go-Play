import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { TimeSettingReqApi, TimeSlotReqApi } from "../../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";
import ButtonSubmit from "../../Layout/ButtonSubmit";

function TimeSlot() {
    const token = useSelector((state) => state.turfAdminLogin.token);

    const [state, setState] = useState([]);
    const slotsArray = [];
    const selected = [];

    useEffect(() => {
        timeSlot();
    }, [""]);
    const timeSlot = async () => {
        const response = await TimeSlotReqApi(token);
        if (response.status === 201) {
            setState(response.data.result);
        }
    };
    const cancelSlot = (id) => {
        slotsArray.shift(id);
        message.warning("Canceled slot");
    };
    const handleSelect = async (id) => {
        console.log(id);
        const compare = slotsArray.includes(id);

        console.log(compare);
        {
            compare === false ? slotsArray.push(id) : cancelSlot(id);
        }
        console.log(slotsArray);

        // setState(...state, id);
        // console.log(state, "");
        // const response = await TimeSettingReqApi(state, token);
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
                                <div
                                    className="bg-gray-100 py-1 w-fit px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gary-200 duration-100 "
                                    key={res.index}
                                    onClick={() => handleSelect(res.index)}
                                >
                                    {res.time}
                                </div>
                            );
                        })}
                    </div>
                )}
            </ul>
            <div>
                <ButtonSubmit />
            </div>
        </div>
    );
}

export default TimeSlot;
