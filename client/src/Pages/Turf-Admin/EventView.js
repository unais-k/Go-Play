import React from "react";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";
import EventViewComponent from "../../Components/Turf-admin/GroundView/Components/EventViewComponent";
import Layout from "../../Components/Turf-admin/SideBarComponents/components/Layout";

function EventView() {
    return (
        // <div className="w-full flex">
        //     <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        //         <TurfAdminSidebarPage />
        //     </div>
        //     <div className="w-8/12 justify-center ">
        //         <EventViewComponent />
        //     </div>
        // </div>
        <Layout>
            <EventViewComponent />
        </Layout>
    );
}

export default EventView;
