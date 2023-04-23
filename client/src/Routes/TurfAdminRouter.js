import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TurfAdminLogin from "../Pages/Turf-Admin/Login";
import TurfRegisterPage from "../Pages/Turf-Admin/Register";
import TurfAdminHome from "../Pages/Turf-Admin/Home";
import GroundList from "../Pages/Turf-Admin/GroundList";
import GroundAdd from "../Pages/Turf-Admin/GroundAdd";
import RegSuccess from "../Pages/Turf-Admin/RegSuccess";
import GroundView from "../Pages/Turf-Admin/GroundView";
import AddEvent from "../Pages/Turf-Admin/AddEvent";
import EditEvent from "../Pages/Turf-Admin/EditEvent";

function TurfAdminRouter() {
    const isAuth = useSelector((state) => state.turfAdminLogin.token);
    console.log(isAuth, "TurfAdmin Token");
    return (
        <div>
            <Routes>
                <Route path="/login" element={<TurfAdminLogin />} />
                <Route path="/register" element={<TurfRegisterPage />} />
                <Route path="/regSuccess" element={<RegSuccess />} />
                <Route path="/home" element={isAuth ? <TurfAdminHome /> : <TurfAdminLogin />} />
                <Route path="/ground-list" element={isAuth ? <GroundList /> : <TurfAdminLogin />} />
                <Route path="/ground-add" element={isAuth ? <GroundAdd /> : <TurfAdminLogin />} />
                <Route path="/ground-view/:id" element={isAuth ? <GroundView /> : <TurfAdminLogin />} />
                <Route path="/add-event/:id" element={isAuth ? <AddEvent /> : <TurfAdminLogin />} />
                <Route path="/edit-event/:id" element={isAuth ? <EditEvent /> : <TurfAdminLogin />} />
            </Routes>
        </div>
    );
}

export default TurfAdminRouter;
