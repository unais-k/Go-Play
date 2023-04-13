import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TurfAdminLogin from "../Pages/Turf-Admin/Login";
import TurfRegisterPage from "../Pages/Turf-Admin/Register";
import TurfAdminHome from "../Pages/Turf-Admin/Home";
import GroundList from "../Pages/Turf-Admin/GroundList";
import GroundAdd from "../Pages/Turf-Admin/GroundAdd";
import RegSuccess from "../Pages/Turf-Admin/RegSuccess";

function TurfAdminRouter() {
    const isAuth = useSelector((state) => state.turfAdminLogin.token);
    console.log(isAuth, "TurfAdmin Token");
    return (
        <div>
            <Routes>
                <Route path="/login" element={<TurfAdminLogin />} />
                <Route path="/register" element={<TurfRegisterPage />} />
                <Route path="/regSuccess" element={<RegSuccess />} />
                <Route path="/home" element={<TurfAdminHome />} />
                <Route path="/ground-list" element={<GroundList />} />
                <Route path="/ground-add" element={<GroundAdd />} />
            </Routes>
        </div>
    );
}

export default TurfAdminRouter;
