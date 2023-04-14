import React from "react";
import GroundViewPage from "../../Components/Turf-admin/GroundView/GroundViewPage";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";

function GroundView() {
    return (
        <div className="w-full flex">
            <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
                <TurfAdminSidebarPage />
            </div>
            <div className="w-full ">
                <GroundViewPage />
            </div>
        </div>
    );
}

export default GroundView;
