import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OwnerDataFetcReqApi } from "../../../API/Services/TurfAdminRequest";

function ProfileComponent() {
    const [ownerDet, setOwnerDet] = useState([]);
    const [groundDetail, setGroundDetail] = useState([]);
    const token = useSelector((state) => state.turfAdminLogin.token);
    const ownerData = async () => {
        const response = await OwnerDataFetcReqApi(token);
        console.log(response.data, "res");
        if (response.status === 201) {
            setOwnerDet(response.data.result);
            setGroundDetail(response.data.ground);
        }
    };
    const date = ownerDet ? new Date(ownerDet.createdAt).toDateString() : "";

    useEffect(() => {
        ownerData();
    }, []);

    return (
        <div>
            <div class="relative max-w-md mx-auto md:max-w-2xl mt-36 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                <div class="px-6">
                    <div class="text-center m-5 p-5">
                        <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                            {ownerDet ? ownerDet.name : ""}
                        </h3>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Default Details</h2>
                        <div className="bg-white p-4 md:flex md:justify-between md:px-10 rounded shadow">
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Email</label>
                                <p className="text-gray-700">{ownerDet ? ownerDet.email : ""}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Phone</label>
                                <p className="text-gray-700">{ownerDet ? ownerDet.phone : ""}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Aadhar</label>
                                <p className="text-gray-700 text-sm">{ownerDet ? ownerDet.aadhar : ""}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold mb-2">Joined with us</label>
                                <p cla ssName="text-gray-700">
                                    {date}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;
