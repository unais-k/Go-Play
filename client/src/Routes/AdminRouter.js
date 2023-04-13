import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLogin from "../Pages/Admin/Login";
import AdminDashboard from "../Pages/Admin/Dashboard";
import Inbox from "../Pages/Admin/Inbox";
import GroundList from "../Pages/Admin/GroundList";
import City from "../Pages/Admin/City";
function AdminRouter() {
    const isAuth = useSelector((state) => state.adminLogin.token);
    console.log(isAuth, "Admin Token");
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dash" element={<AdminDashboard />} />
                <Route path="/notification" element={<Inbox />} />
                <Route path="/ground-list" element={<GroundList />} />
                <Route path="/add-city" element={<City />} />
            </Routes>
        </div>
    );
}

export default AdminRouter;
