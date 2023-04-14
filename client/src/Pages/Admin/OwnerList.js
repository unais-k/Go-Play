import React from "react";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";
import OwnerListPage from "../../Components/Admin/OwnerList/OwnerListPage";

function OwnerList() {
    return (
        <div className="flex overflow-hidden">
            <SidebarPage />
            <div className="w-full">
                <OwnerListPage />
            </div>
        </div>
    );
}

export default OwnerList;
