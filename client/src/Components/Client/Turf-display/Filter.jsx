import { Sidebar } from "flowbite-react";
import React from "react";
import { FaFilter } from "react-icons/fa";

function Filter() {
    return (
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
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar.Collapse>
                </Sidebar>
            </div>
        </div>
    );
}

export default Filter;
