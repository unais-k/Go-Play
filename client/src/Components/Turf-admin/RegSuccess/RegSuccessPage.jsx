import React from "react";
import { useNavigate } from "react-router-dom";

function RegSuccessPage() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    };
    return (
        <div>
            <div class="md:container md:mx-auto min-h-screen flex justify-center items-center">
                <div class="w-full md:w-2/5 flex flex-col justify-center items-center bg-gray-100 rounded-2xl shadow-md dark:border">
                    <h1 class="font-bold text-xl text-center md:text-left p-5">
                        Your Account is under verification it may take up to 48 hrs we will let you know by sending email to
                        your given credential
                    </h1>
                    <div class="mt-6 text-center md:text-left">
                        <p class="font-serif">
                            For further Details Contact us:-
                            <br class="md:hidden" /> go-play@gmail.com
                        </p>
                    </div>
                    <div class="mt-4 pb-4">
                        <button className="bg-black rounded text-white px-3 py-2" onClick={handleHome}>
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegSuccessPage;
