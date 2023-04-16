import React from "react";
import ConstNavbar from "../../Components/Client/ConstNavbar/ConstNavbar";
import HomePage from "../../Components/Client/Home/HomePage";
import NavbarPage from "../../Components/Client/Navbar/Navbar";
import Footer from "../../Components/Client/Footer/Footer";
import { useSelector } from "react-redux";

function Home() {
    const location = useSelector((state) => state.userLogin.city);

    return (
        <div>
            <div className="h-16 mt-1">
                {location ? <NavbarPage true={false} place={location} /> : <NavbarPage true={true} place={"mumbai11"} />}
            </div>
            <ConstNavbar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default Home;
