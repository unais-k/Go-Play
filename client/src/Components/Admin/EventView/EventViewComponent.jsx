import React, { useEffect, useState } from "react";
import TimeAvailableComponent from "./TimeAvailableComponent";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { EventDetailFetchReqApi } from "../../../API/Services/AdminRequest";

function EventViewComponent() {
    const token = useSelector((state) => state.adminLogin.token);
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
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default EventViewComponent;
