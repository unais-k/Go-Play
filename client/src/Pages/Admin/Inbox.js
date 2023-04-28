import React from "react";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";
import InboxPage from "../../Components/Admin/Inbox/InboxPage";
import Layout from "../../Components/Admin/SideBarComponents/components/Layout";

function Inbox() {
    return (
        // <div className="flex">
        //     <SidebarPage />
        //     <div className=" flex h-fit">
        //         <InboxPage />
        //     </div>
        // </div>
        <Layout>
            <InboxPage/>
        </Layout>
    );
}

export default Inbox;
