import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./NavbarPage.css";
import { setLogout } from "../../../Utils/Store/Slice/Client";
function NavbarPage() {
    const navigate = useNavigate();
    const handleHomePage = () => {
        navigate("/");
    };
    const dispatch = useDispatch();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleLogout = () => {
        dispatch(setLogout());
    };
    const user = useSelector((state) => state.userLogin.token);
    console.log(user);
    return (
        <header>
            <div className="logo-container">
                <div className="logo-left flex justify-between">
                    <a>
                        <img src="./logo-no-background.png" className="img-logo" alt="logo-left" />
                    </a>
                    <span className="go-play-logo font-bold text-xl" onClick={handleHomePage}>
                        Go Play
                    </span>
                </div>
                <div className="header-right pull-right ">
                    <a className="text-lime-600">For Business</a>
                    <a className="text-lime-600">Mumbai</a>
                    {user ? (
                        <a className="text-lime-600" onClick={handleLogout}>
                            Sign Out
                        </a>
                    ) : (
                        <a className="text-lime-600" onClick={handleLogin}>
                            Sign In
                        </a>
                    )}
                    <a className="log-btn text-white bg-amber-500"> Book online</a>
                </div>
            </div>
        </header>
    );
}

export default NavbarPage;
