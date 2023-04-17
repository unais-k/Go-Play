import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { TimeSlotReqApi } from "../../../../API/Services/TurfAdminRequest";
import { useSelector } from "react-redux";

function TimeSlot() {
    const token = useSelector((state) => state.turfAdminLogin.token);

    const [state, setState] = useState([]);
    useEffect(() => {
        timeSlot();
    }, [state]);
    const timeSlot = async () => {
        const response = await TimeSlotReqApi(token);
        if (response.status === 201) {
            setState(response.data.result);
        }
    };
    return (
        <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                {/* <span className="text-green-500">
                    <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </span> */}
                <BiTime size={20} color="green" />
                <span className="tracking-wide">Time</span>
            </div>
            <ul className="list-inside space-y-2">
                {/* <li>
                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                    <div className="text-teal-600">Owner at Her Company Inc.</div>
                    <div className="text-gray-500 text-xs">March 2020 - Now</div>
                // </li> */}
                {/* {state.length===0 ? ()} */}
            </ul>
        </div>
    );
}

export default TimeSlot;
