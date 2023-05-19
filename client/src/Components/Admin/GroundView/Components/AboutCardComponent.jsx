import React from "react";

function AboutCardComponent({ viewData }) {
    const date = new Date(viewData?.createdAt).toDateString();

    return (
        <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span class="text-green-500">
                    <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </span>
                <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Owner name</div>
                        <div class="px-4 py-2">{viewData?.Owner?.name}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Venue Name</div>
                        <div class="px-4 py-2">{viewData?.name}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">+91 {viewData?.phone}</div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Available Status</div>
                        <div class="px-4 py-2">true</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                            <a class="" href={`mailto:${viewData?.email}`}>
                                {viewData?.email}
                            </a>
                        </div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Created At</div>
                        <div class="px-4 py-2">{date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCardComponent;
