import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLogin from "../Pages/Admin/Login";
import AdminDashboard from "../Pages/Admin/Dashboard";
import Inbox from "../Pages/Admin/Inbox";
import GroundList from "../Pages/Admin/GroundList";
import City from "../Pages/Admin/City";
import OwnerList from "../Pages/Admin/OwnerList";
function AdminRouter() {
    const isAuth = true;
    // const isAuth = useSelector((state) => state.adminLogin.token);
    console.log(isAuth, "Admin Token");
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/dash" element={isAuth ? <AdminDashboard /> : <Navigate to="admin/" />} />
                <Route path="/notification" element={isAuth ? <Inbox /> : <Navigate to="admin/" />} />
                <Route path="/ground-list" element={isAuth ? <GroundList /> : <Navigate to="admin/" />} />
                <Route path="/add-city" element={isAuth ? <City /> : <Navigate to="admin/" />} />
                <Route path="/owner-list" element={isAuth ? <OwnerList /> : <Navigate to="admin/" />} />
            </Routes>
        </div>
    );
}

export default AdminRouter;
