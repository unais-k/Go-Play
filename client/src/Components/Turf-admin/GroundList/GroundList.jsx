import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function TurfGroundListPage() {
    const navigate = useNavigate();
    const handleAddGround = () => {
        navigate("/turf-admin/ground-add");
    };
    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
            </Breadcrumb>
            <button onClick={handleAddGround} className="bg-green-500 rounded m-3 px-4 py-2">
                Add Ground
            </button>
            <div class="max-w-sm rounded overflow-hidden shadow-lg m-3">
                <img class="w-full" src="./../sports-.jpg" alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                        perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div>
                <div className="">
                    <button className="bg-black text-white m-2 py-3 px-4 rounded">View -{">"}</button>
                </div>
            </div>
        </div>
    );
}

export default TurfGroundListPage;
