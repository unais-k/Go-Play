import React from "react";
import "./HomePage.css";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

function HomePage() {
    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };
    return (
        <div className="home-dash">
            <div className="bannerPage">
                <div className="img-banner">
                    <img src="./sports-.jpg" alt="HomePage banner" />
                </div>
            </div>
            <div className="search-team text-center m-3">
                <div>
                    <h4 className=" text-green-700 m-2">
                        <b>Search for the best turf grounds, indoor courts grounds in your city</b>
                    </h4>
                </div>
                <div className="search-in flex justify-center">
                    <input
                        type="text"
                        name="search"
                        className="w-8/12 bg-xx text-white placeholder-white"
                        placeholder="Search"
                    />
                    <span className="ps-4 pt-1 w-2/12 bg-ss">
                        <FiSearch size={30} color="white" />
                    </span>
                </div>
            </div>
            <div className="content-center bg-stone-100 pt-10 w-full flex justify-center items-center">
                <div className="featured  w-2/3">
                    <div className="h1-line ms-4">
                        <h1 className="text-3xl font-bold text-lime-600">Featured Listing</h1>
                        <p>See & book your ground from the list of most popular grounds in your city</p>
                    </div>
                    <div className="flex">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-16 gap-2">
                            <div className="w-11/12 h-auto bg-white p-3 m-4 h-fit">
                                <div className="box-img mb-2">
                                    <img src="./box-img.jpg" alt="box-img" />
                                </div>
                                <div className="img-head">
                                    <p className="font-bold text-lime-600 uppercase mb-1">
                                        Play The Turf, Mumbai - by GO Play
                                    </p>
                                    {/* <p className="font-bold text-lime-600 uppercase">{truncate(movies ? movies.overview : "", 150)}</p> */}
                                    <p className="text-xs">Mumbai</p>
                                </div>
                                <div className="books flex justify-between mt-4">
                                    <b className="text-amber-500 hover:text-zinc-950">BOOK NOW</b>
                                    <FaPlus size={15} className="mt-1" color="grey" />
                                </div>
                            </div>
                            <div className="w-11/12 h-auto bg-white p-3 m-4 h-fit">
                                <div className="box-img mb-2">
                                    <img src="./box-img.jpg" alt="box-img" />
                                </div>
                                <div className="img-head">
                                    <p className="font-bold text-lime-600 uppercase mb-1">
                                        Play The Turf, Mumbai - by GO Play
                                    </p>
                                    {/* <p className="font-bold text-lime-600 uppercase">{truncate(movies ? movies.overview : "", 150)}</p> */}
                                    <p className="text-xs">Mumbai</p>
                                </div>
                                <div className="books flex justify-between mt-4">
                                    <b className="text-amber-500 hover:text-zinc-950">BOOK NOW</b>
                                    <FaPlus size={15} className="mt-1" color="grey" />
                                </div>
                            </div>
                            <div className="w-11/12 h-auto bg-white p-3 m-4 h-fit">
                                <div className="box-img mb-2">
                                    <img src="./box-img.jpg" alt="box-img" />
                                </div>
                                <div className="img-head">
                                    <p className="font-bold text-lime-600 uppercase mb-1">
                                        Play The Turf, Mumbai - by GO Play
                                    </p>
                                    {/* <p className="font-bold text-lime-600 uppercase">{truncate(movies ? movies.overview : "", 150)}</p> */}
                                    <p className="text-xs">Mumbai</p>
                                </div>
                                <div className="books flex justify-between mt-4">
                                    <b className="text-amber-500 hover:text-zinc-950">BOOK NOW</b>
                                    <FaPlus size={15} className="mt-1" color="grey" />
                                </div>
                            </div>
                            <div className="w-11/12 h-auto bg-white p-3 m-4 h-fit">
                                <div className="box-img mb-2">
                                    <img src="./box-img.jpg" alt="box-img" />
                                </div>
                                <div className="img-head">
                                    <p className="font-bold text-lime-600 uppercase mb-1">
                                        Play The Turf, Mumbai - by GO Play
                                    </p>
                                    {/* <p className="font-bold text-lime-600 uppercase">{truncate(movies ? movies.overview : "", 150)}</p> */}
                                    <p className="text-xs">Mumbai</p>
                                </div>
                                <div className="books flex justify-between mt-4">
                                    <b className="text-amber-500 hover:text-zinc-950">BOOK NOW</b>
                                    <FaPlus size={15} className="mt-1" color="grey" />
                                </div>
                            </div>
                            <div className="w-11/12 h-auto bg-white p-3 m-4 h-fit">
                                <div className="box-img mb-2">
                                    <img src="./box-img.jpg" alt="box-img" />
                                </div>
                                <div className="img-head">
                                    <p className="font-bold text-lime-600 uppercase mb-1">
                                        Play The Turf, Mumbai - by GO Play
                                    </p>
                                    {/* <p className="font-bold text-lime-600 uppercase">{truncate(movies ? movies.overview : "", 150)}</p> */}
                                    <p className="text-xs">Mumbai</p>
                                </div>
                                <div className="books flex justify-between mt-4">
                                    <b className="text-amber-500 hover:text-zinc-950">BOOK NOW</b>
                                    <FaPlus size={15} className="mt-1" color="grey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-stone-100  w-full flex justify-center items-center">
                <div className="popular-locality w-2/3 bg-white mb-16 p-8 pt-12">
                    <h1 className="text-3xl font-bold text-lime-600">Popular Localities</h1>
                    <p>Explore grounds & venues in and around popular areas of your city</p>
                    <div className="flex justify-content-evenly mt-10">
                        <div className="me-[20%]">
                            <ul>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="me-[20%]">
                            <ul>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Andheri <span className="font-sans text-zinc-400">(13 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Goregaon <span className="font-sans text-zinc-400">(1 Places)</span>
                                </li>
                                <li className="font-mono hover:text-amber-500">
                                    Kandivali <span className="font-sans text-zinc-400">(7 Places)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-20">
                <div className="w-2/3 flex mt-4">
                    <div>
                        <h1 className="text-2xl font-bold text-lime-600">Come, Let's Pay...</h1>
                        <p className="text-sm">
                            When you book your ground online with us, you get to pay with credit card,
                        </p>

                        <p className="text-sm">debit card, net banking or with digital wallets too...</p>

                        <h4 className="text-lime-700 text-lg mt-6">
                            Looking for discounts & offers on your ground bookings?
                        </h4>
                        <div className="mt-4 w-4/5 flex justify-evenly">
                            <div className=" w-1/5 h-1/5">
                                <img src="" alt="ph" />
                                <p className="text-xs">CONFIRMED BOOKINGS</p>
                            </div>
                            <div className=" w-1/5 h-1/5">
                                <img src="" alt="ph" />
                                <p className="text-xs">CONVENIENT PROCESS</p>
                            </div>
                            <div className=" w-1/5 h-1/5">
                                <img src="" alt="ph" />
                                <p className="text-xs">CASHLESS PAYMENTS</p>
                            </div>
                        </div>
                        <p className="mt-8">With Go-Play, you enjoy the process of ground booking as much as you</p>
                        <p>enjoy the game</p>
                        <button className="text-white bg-amber-500 px-10 py-2 mt-3">SIGN IN</button>
                    </div>
                    <div>
                        <img src="./football-photo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
