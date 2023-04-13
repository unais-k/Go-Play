import React from "react";
import GroundListPageAdmin from "../../Components/Admin/GroundList/GroundList";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";

function GroundList() {
    return (
        <div className="flex overflow-hidden">
            <SidebarPage />
            <div className="w-full">
                <GroundListPageAdmin />
            </div>
        </div>
    );
}

export default GroundList;
