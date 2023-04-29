import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import EventView from "../Pages/Turf-Admin/EventView";
import Profile from "../Pages/Turf-Admin/Profile";

function TurfAdminRouter() {
    const isAuth = useSelector((state) => state.turfAdminLogin.token);
    console.log(isAuth, "TurfAdmin Token");
    return (
        <div>
            <Routes>
                <Route path="/login" element={<TurfAdminLogin />} />
                <Route path="/register" element={<TurfRegisterPage />} />
                <Route path="/regSuccess" element={<RegSuccess />} />
                {/* <Route path="/home" element={<TurfAdminHome />} /> */}
                <Route path="/home" element={isAuth ? <TurfAdminHome /> : <Navigate to="/turf-admin/login"/>} />
                {/* <Route path="/ground-list" element={<GroundList />} /> */}
                <Route path="/ground-list" element={isAuth ? <GroundList /> : <Navigate to="/turf-admin/login"/>} />
                <Route path="/ground-add" element={isAuth ? <GroundAdd /> : <Navigate to="/turf-admin/login" />} />
                <Route path="/ground-view/:id" element={isAuth ? <GroundView /> : <Navigate to="/turf-admin/login" />} />
                <Route path="/add-event/:id" element={isAuth ? <AddEvent /> : <Navigate to="/turf-admin/login" />} />
                <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/turf-admin/login" />} />
                <Route path="/edit-event/:id" element={isAuth ? <EditEvent /> : <Navigate to="/turf-admin/login" />} />
                <Route path="/event-view/:id" element={isAuth ? <EventView /> : <Navigate to="/turf-admin/login" />} />
            </Routes>
        </div>
    );
}

export default TurfAdminRouter;
