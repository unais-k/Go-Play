import React, { useState } from "react";

function AddGroundPage() {
    const type = [{ name: "Turf" }, { name: "Soapy" }, { name: "Grass" }, { name: "Sand" }, { name: "Court" }];
    const size = [
        { name: "5 * 5" },
        { name: "6 * 6" },
        { name: "7 * 7" },
        { name: "8 * 8" },
        { name: "10 * 10" },
        { name: "11 * 11" },
    ];
    const [profileImage, setProfileImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = () => {};
    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>
                <h2 className="text-center text-3xl m-3 text-groundAdd">Start a new Venue</h2>
            </div>
            <div class="container mx-auto w-8/12">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4 flex">
                        <div className="w-8/12 h-1/12">
                            <label class="block text-gray-700 font-bold mb-2" for="company_name">
                                Profile Photo
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="company_name"
                                name="name"
                                onChange={handleImageChange}
                                type="file"
                                placeholder="Enter your company name"
                            />
                            <p>{isLoading ? "Uploading" : ""}</p>
                        </div>
                        <div>{imagePreview}</div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="company_name">
                            Full Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="company_name"
                            name="name"
                            type="text"
                            placeholder="Enter your company name"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="email">
                            Email Address
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter company email address"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="Phone">
                            Phone
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            name="phone"
                            placeholder="Enter your Dial number"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="address">
                            Address
                        </label>
                        <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            name="address"
                            placeholder="Enter your Turf's address"
                        ></textarea>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="phone_number">
                            Nearest City
                        </label>
                        <select
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="nearCity"
                            placeholder="Enter your Nearest City"
                        >
                            <option value="">City</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="phone_number">
                            Place
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="place"
                            placeholder="Enter company Place"
                        ></input>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="confirm_password">
                            State
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            name="state"
                            placeholder="Enter your State"
                        />
                    </div>
                    <div class="mb-4 flex justify-between w-full">
                        <div className="me-2 basis-1/2">
                            <label class="block text-gray-700 font-bold mb-2" for="confirm_password">
                                price
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                name="price"
                                placeholder="Enter your price"
                            />
                        </div>
                        <div className="ms-2 basis-1/2">
                            <label class="block text-gray-700 font-bold mb-2" for="confirm_password">
                                price at night
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                name="priceAtNight"
                                placeholder="Enter your Price at night"
                            />
                        </div>
                    </div>
                    <div class="mb-4 flex">
                        <div className="me-2 basis-1/2">
                            <label class="block text-gray-700 font-bold mb-2" for="confirm_password">
                                Ground type
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                name="state"
                                placeholder="Enter your password"
                            >
                                {type.map((obj, index) => {
                                    return (
                                        <option key={index + Math.round(Math.random) * 124} value={obj.name}>
                                            {obj.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="ms-2 basis-1/2">
                            <label class="block text-gray-700 font-bold mb-2" for="confirm_password">
                                Size
                            </label>
                            <select
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                name="state"
                            >
                                {size.map((obj, index) => {
                                    return (
                                        <option key={index + Math.round(Math.random) * 124} value={obj.name}>
                                            {obj.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddGroundPage;
