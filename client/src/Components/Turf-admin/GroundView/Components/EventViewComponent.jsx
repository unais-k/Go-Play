import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EventDetailFetchReqApi } from "../../../../API/Services/TurfAdminRequest";
import { MdViewColumn } from "react-icons/md";

function EventViewComponent() {
    const token = useSelector((state) => state.turfAdminLogin.token);
    const params = useParams();
    const [state, setState] = useState([]);
    const [ground, setGround] = useState([]);
    const [sport, setSport] = useState([]);
    const [rows, setRows] = useState([]);
    const eventId = params.id;

    const eventDetail = async () => {
        const response = await EventDetailFetchReqApi(eventId, token);

        if (response.status === 201) {
            setState(response.data.result);
            setGround(response.data.result.groundId);
            setSport(response.data.result.eventAvailable);
            setRows(response.data.result.slots);
        }
    };
    console.log(state, "state");

    const handleSelectedSlots = (id) => {
        // const response =
        console.log("unselect done");
    };

    const handleUnSelectedSlots = (id) => {
        console.log("select done");
    };

    useEffect(() => {
        if (eventId) {
            eventDetail();
        }
    }, [eventId]);
    return (
        <div>
            <div className="p-5">
                <div className="p-8 bg-white shadow">
                    <div className="mt-20 text-center pb-5">
                        {state ? (
                            <>
                                <h1 className="text-4xl font-medium text-gray-700">{state.groundName}</h1>
                                <p className="font-light text-gray-600 mt-3">{ground.name}</p>
                                <p className="mt-8 text-gray-500">Address - {ground.address}</p>
                                {/* <p className="mt-8 text-gray-500">Place - {ground.place}</p> */}
                                <p className="mt-2 text-gray-500">{ground.nearCity}</p>
                            </>
                        ) : (
                            <>
                                <h1 className="text-4xl font-medium text-gray-700">
                                    Jessica Jones, <span className="font-light text-gray-500">27</span>
                                </h1>
                                <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>
                                <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                                <p className="mt-2 text-gray-500">University of Computer Science</p>
                            </>
                        )}
                    </div>
                    <h2 className="text-center m-5 font-bold text-2xl">Available Sports</h2>
                    <div className="grid grid-cols-1 border-b pb-10 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div></div>
                        </div>

                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            {ground &&
                                sport?.map((res) => {
                                    return (
                                        <>
                                            <button className=" py-2 px-4 uppercase rounded bg-gray-200 text-dark hover:bg-gray-300 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                                {res}
                                            </button>
                                        </>
                                    );
                                })}
                            {/* <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Connect
                            </button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Message
                            </button> */}
                        </div>
                    </div>
                    {/* <div className="mt-12 font-bold text-2xl ">Booking</div>
                    <div className="mt-5 flex flex-col justify-center">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Client Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            TIme & Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Order status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Payment status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            Unais K
                                        </th>
                                        <td class="px-6 py-4">24-04-23 Fri</td>
                                        <td class="px-6 py-4">True</td>
                                        <td class="px-6 py-4">Pending</td>
                                        <td class="px-6 py-4">
                                            <MdViewColumn size={23} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default EventViewComponent;
