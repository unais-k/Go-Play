import React from "react";
import AddEventComponent from "../../Components/Turf-admin/AddEvent/AddEventComponent";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";

function AddEvent() {
    return (
        <div className="w-full flex">
            <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
                <TurfAdminSidebarPage />
            </div>
            <div className="w-8/12 justify-center ">
                <AddEventComponent />
            </div>
        </div>
    );
}

export default AddEvent;
