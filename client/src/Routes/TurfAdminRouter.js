import React from "react";
import { Routes, Route } from "react-router-dom";
import TurfAdminLogin from "../Pages/Turf-Admin/Login";
import TurfRegisterPage from "../Pages/Turf-Admin/Register";
function TurfAdminRouter() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<TurfAdminLogin />} />
                <Route path="/register" element={<TurfRegisterPage />} />
                <Route path="/home" />
            </Routes>
        </div>
    );
}

export default TurfAdminRouter;
