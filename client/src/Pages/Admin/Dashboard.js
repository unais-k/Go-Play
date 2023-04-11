import React from "react";
import DashboardPageAdmin from "../../Components/Admin/Dashboard/Dashboard";
import SidebarPage from "../../Components/Admin/Sidebar/Sidebar";

function AdminDashboard() {
    return (
        <div className="flex">
            <SidebarPage />
            <DashboardPageAdmin />
        </div>
    );
}

export default AdminDashboard;
