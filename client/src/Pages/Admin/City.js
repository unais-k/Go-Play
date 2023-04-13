import React from "react";
import CityPage from "../../Components/Admin/City/City";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";

function City() {
    return (
        <div className="flex overflow-hidden">
            <SidebarPage />
            <div className="w-full">
                <CityPage />
            </div>
        </div>
    );
}

export default City;
