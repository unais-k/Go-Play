import React from "react";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";
import TurfHomePage from "../../Components/Turf-admin/Home/HomePage";

function TurfAdminHome() {
    return (
        <div className="w-full flex">
            <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
                <TurfAdminSidebarPage />
            </div>
            <div className="w-8/12 justify-center ">
                <TurfHomePage />
            </div>
        </div>
    );
}

export default TurfAdminHome;
