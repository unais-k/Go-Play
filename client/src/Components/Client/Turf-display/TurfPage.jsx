import React from "react";
import { Breadcrumb, Sidebar } from "flowbite-react";
import { FaFilter } from "react-icons/fa";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";

function TurfPage() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-2/3">
                <Breadcrumb
                    aria-label="Solid background breadcrumb example"
                    className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
                >
                    <Breadcrumb.Item href="#" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Mumbai</Breadcrumb.Item>
                    <Breadcrumb.Item>Football</Breadcrumb.Item>
                </Breadcrumb>
                <div>
                    <div className="list-none ">
                        <Sidebar aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Collapse label="FILTER" className="hover:bg-white" icon={FaFilter}>
                                <Sidebar.Items>
                                    <Sidebar.ItemGroup>
                                        <Sidebar.Item className="text-sm bg-neutral-100" href="#">
                                            <b>GROUND TYPE</b>
                                            <div>
                                                <ul className="mt-2 ">
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Court
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Soapy
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Public
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Grass
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Turf
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Sidebar.Item>
                                        <Sidebar.Item className="text-sm bg-neutral-100 " href="#">
                                            <b>SELECT AREA</b>
                                            <div>
                                                <ul className="mt-2 h-1/2 overscroll-x-auto">
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Court
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Soapy
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Public
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Grass
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Turf
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Court
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="focus:ring-1 me-2 rounded" />
                                                            Soapy
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Public
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Grass
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label>
                                                            <input type="checkbox" className="me-2 rounded focus:ring-1" />
                                                            Turf
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Sidebar.Item>
                                        {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                                            <Sidebar.Item href="#">Products</Sidebar.Item>
                                        </Sidebar.Collapse> */}
                                        {/* <Sidebar.Item href="#" icon={HiInbox}>
                                            Inbox
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#" icon={HiUser}>
                                            Users
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                                            Products
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                            Sign In
                                        </Sidebar.Item>
                                        <Sidebar.Item href="#" icon={HiTable}>
                                            Sign Up
                                        </Sidebar.Item> */}
                                    </Sidebar.ItemGroup>
                                </Sidebar.Items>
                            </Sidebar.Collapse>
                        </Sidebar>
                    </div>
                    <div className="listing"></div>
                </div>
            </div>
        </div>
    );
}

export default TurfPage;
