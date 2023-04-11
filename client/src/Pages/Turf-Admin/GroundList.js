import React from "react";
import TurfGroundListPage from "../../Components/Turf-admin/GroundList/GroundList";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";
import AddGroundPage from "../../Components/Turf-admin/AddGround/AddGround";

function GroundList() {
    return (
        <div className="w-full flex">
            <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
                <TurfAdminSidebarPage />
            </div>
            <div className="w-full ">
                <TurfGroundListPage />
            </div>
        </div>
    );
}

export default GroundList;
