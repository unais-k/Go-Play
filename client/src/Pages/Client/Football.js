import React from "react";
import TurfPage from "../../Components/Client/Turf-display/TurfPage";
import Footer from "../../Components/Client/Footer/Footer";
import NavbarPage from "../../Components/Client/Navbar/Navbar";
import ConstNavbar from "../../Components/Client/ConstNavbar/ConstNavbar";

function Football() {
    return (
        <div>
            <div className="h-16 mt-1">
                <NavbarPage />
            </div>
            <ConstNavbar />
            <TurfPage />
            <Footer />
        </div>
    );
}

export default Football;
