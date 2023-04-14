import React from "react";
import ConstNavbar from "../../Components/Client/ConstNavbar/ConstNavbar";
import HomePage from "../../Components/Client/Home/HomePage";
import NavbarPage from "../../Components/Client/Navbar/Navbar";
import Footer from "../../Components/Client/Footer/Footer";

function Home() {
    return (
        <div>
            <div className="h-16 mt-1">
                <NavbarPage true={true} />
            </div>
            <ConstNavbar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default Home;
