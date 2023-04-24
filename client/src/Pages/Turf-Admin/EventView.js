import React from "react";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";
import EventViewComponent from "../../Components/Turf-admin/GroundView/Components/EventViewComponent";

function EventView() {
    return (
        <div className="w-full flex">
            <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
                <TurfAdminSidebarPage />
            </div>
            <div className="w-8/12 justify-center ">
                <EventViewComponent />
            </div>
        </div>
    );
}

export default EventView;
