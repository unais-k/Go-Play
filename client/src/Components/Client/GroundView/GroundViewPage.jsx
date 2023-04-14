import React, { useEffect, useState } from "react";
import { GroundViewReqApi } from "../../../API/Services/ClientRequest";
import { useLocation } from "react-router-dom";
import { message } from "antd";

function GroundViewPage() {
    const location = useLocation();
    const id = location.state.data;
    console.log(id);
    const [state, setState] = useState([]);
    useEffect(() => {
        GroundData();
    }, []);
    const GroundData = async () => {
        const response = await GroundViewReqApi(id);

        if (response.status === 200) {
            setState(response.data.result);
        } else {
            message.error("Something went wrong");
        }
    };
    console.log(state, "state");

    return (
        <div className="flex justify-center items-center">
            <div className="w-9/12">
                <div>
                    <h1 className="text-3xl font-bold text-lime-600 my-3">{state.name}</h1>
                </div>
                <div className="flex">
                    <div className="w-7/12 flex flex-col">
                        <div className="">
                            <img src={state.images} alt="image of turf" />
                        </div>
                        <div className="h-52 w-full flex mt-3">
                            <marquee behavior="alternate" direction="left">
                                <div className="flex">
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src="./box-img.jpg" alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src={state.images} alt="" />
                                    <img className="w-52 h-full ms-1 me-1" src="./box-img.jpg" alt="" />
                                </div>
                            </marquee>
                        </div>
                    </div>
                    <div className="w-8/12">
                        <div className="text-left m-3">
                            <p>Dial :{state.phone}</p>
                            <p className="pt-3">
                                {state.place},{state.nearCity}
                            </p>
                        </div>
                        <div>
                            <button className="bg-amber-500 text-white px-4 py-2 m-4">Book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroundViewPage;
