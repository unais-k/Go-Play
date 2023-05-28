import React from "react";
import BannerCard from "./BannerCard";
import { useSelector } from "react-redux";
import { BannerFetchReqApi } from "../../../../API/Services/AdminRequest";
import { useEffect } from "react";
import { useState } from "react";

function ViewPage() {
    const token = useSelector((state) => state.adminLogin.token);
    const [banner, setBanner] = useState([]);
    const fetchAll = async () => {
        const response = await BannerFetchReqApi(token);
        console.log(response.data);
        if (response.status === 201) {
            setBanner(response.data.result);
        }
    };
    useEffect(() => {
        if (token) {
            fetchAll();
        }
    }, [token]);
    return (
        <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-slate-700 mx-auto p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <BannerCard />
            </div>
        </div>
    );
}

export default ViewPage;
