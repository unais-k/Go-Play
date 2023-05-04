import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgetPassword from "../Pages/Client/ForgetPassword";
import Home from "../Pages/Client/Home";
import Login from "../Pages/Client/Login";
import Otp from "../Pages/Client/Otp";
import Register from "../Pages/Client/Register";
import Football from "../Pages/Client/Football";
import { useSelector } from "react-redux";
import GroundPage from "../Pages/Client/GroundPage";
import Payment from "../Pages/Client/Payment";
import Profile from "../Pages/Client/Profile";
import Booking from "../Pages/Client/Booking";
import BookingView from "../Pages/Client/BookingView";
function ClientRouter() {
    const isAuth = useSelector((state) => state.userLogin.token);
    console.log(isAuth, "Client Token");
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/forget_password" element={<ForgetPassword />} />
                <Route path="/football-turfs" element={<Football />} />
                <Route path="/ground-view/:id" element={<GroundPage />} />
                <Route path="/payment" element={isAuth ? <Payment /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/booking" element={isAuth ? <Booking /> : <Navigate to="/login" />} />
                <Route path="/booking-view/:id" element={isAuth ? <BookingView /> : <Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default ClientRouter;
