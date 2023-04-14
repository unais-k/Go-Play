import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";

function GroundViewPage() {
    return (
        <div>
            <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">Venue</Breadcrumb.Item>
                <Breadcrumb.Item>View</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <div>
                    <h1>Name</h1>
                </div>
                <div>
                    <div>
                        <img src="./box-img.jpg" alt="box" />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default GroundViewPage;
