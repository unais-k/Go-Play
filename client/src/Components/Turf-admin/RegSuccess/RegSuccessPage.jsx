import React from "react";

function RegSuccessPage() {
    return (
        <div>
            <div class="md:container md:mx-auto min-h-screen flex justify-center items-center">
                <div class="w-full md:w-2/5 flex flex-col justify-center items-center bg-white rounded-2xl shadow-md dark:border">
                    <h1 class="font-bold text-2xl px-5 text-center md:text-left">
                        Your Account is under verification it may take up to 48 hrs we will let you know when the process is
                        finished
                    </h1>
                    <div class="mt-6 text-center md:text-left">
                        <p class="font-serif">
                            For further Details Contact us:-
                            <br class="md:hidden" /> go-play@gmail.com
                        </p>
                    </div>
                    <div class="mt-4 pb-4">
                        <button class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegSuccessPage;
