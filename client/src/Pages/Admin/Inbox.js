import React from "react";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";
import InboxPage from "../../Components/Admin/Inbox/InboxPage";

function Inbox() {
    return (
        <div className="flex">
            <SidebarPage />
            <div className=" flex h-fit">
                <InboxPage />
            </div>
        </div>
    );
}

export default Inbox;
