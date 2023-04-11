import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "../Pages/Admin/Login";
import AdminDashboard from "../Pages/Admin/Dashboard";
import Inbox from "../Pages/Admin/Inbox";
function AdminRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dash" element={<AdminDashboard />} />
                <Route path="/notification" element={<Inbox />} />
            </Routes>
        </div>
    );
}

export default AdminRouter;
