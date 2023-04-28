import React from "react";
import EditEventComponent from "../../Components/Turf-admin/AddEvent/EditEventComponent";
import TurfAdminSidebarPage from "../../Components/Turf-admin/Sidebar/SidebarPage";
import Layout from "../../Components/Turf-admin/SideBarComponents/components/Layout";

function EditEvent() {
    return (
        // <div className="w-full flex">
        //     <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        //         <TurfAdminSidebarPage />
        //     </div>
        //     <div className="w-8/12 justify-center ">
        //         <EditEventComponent />
        //     </div>
        // </div>
        <Layout>
            <EditEventComponent/>
        </Layout>
    );
}

export default EditEvent;
