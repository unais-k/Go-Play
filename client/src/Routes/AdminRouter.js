import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLogin from "../Pages/Admin/Login";
import AdminDashboard from "../Pages/Admin/Dashboard";
import Inbox from "../Pages/Admin/Inbox";
import GroundList from "../Pages/Admin/GroundList";
import City from "../Pages/Admin/City";
import OwnerList from "../Pages/Admin/OwnerList";
function AdminRouter() {
    const isAuth = useSelector((state) => state.adminLogin.token);
    console.log(isAuth, "Admin Token");
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dash" element={isAuth ? <AdminDashboard /> : <AdminLogin />} />
                <Route path="/notification" element={isAuth ? <Inbox /> : <AdminLogin />} />
                <Route path="/ground-list" element={isAuth ? <GroundList /> : <AdminLogin />} />
                <Route path="/add-city" element={isAuth ? <City /> : <AdminLogin />} />
                <Route path="/owner-list" element={isAuth ? <OwnerList /> : <AdminLogin />} />
            </Routes>
        </div>
    );
}

export default AdminRouter;
