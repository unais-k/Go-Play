import React, { useEffect, useState } from "react";
import { AiOutlineFolderView } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { MdViewColumn } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ListEvent({ event }) {
    // const token = useSelector((state) => state.turfAdminLogin.token);
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleEdit = (id) => {
        console.log("handleEdit");
        navigate("/turf-admin/edit-event/" + id);
    };
    const handleBookingView = (id) => {
        console.log("handleBookingView");
    };
    const handleView = (id) => {
        navigate("/turf-admin/event-view/" + id);
    };
    const handleToggle = async () => {
        setToggle((current) => !current);
    };

    console.log(toggle);
    useEffect(() => {}, [toggle]);

    return (
        <div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Event name
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            View
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Bookings
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Available
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {event?.length ? (
                                        event?.map((res, index) => {
                                            return (
                                                <tr
                                                    key={Math.round(Math.random * 12 * 12 + 24)}
                                                    class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700"
                                                >
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                    <td class="whitespace-nowrap px-6 py-4">{res.groundName}</td>
                                                    <td
                                                        class="whitespace-nowrap px-6 py-4"
                                                        onClick={() => handleView(res._id)}
                                                    >
                                                        <MdViewColumn size={23} />
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap px-6 py-4"
                                                        onClick={() => handleBookingView(res._id)}
                                                    >
                                                        <AiOutlineFolderView size={23} />
                                                    </td>
                                                    <td class="whitespace-nowrap px-6 py-4">
                                                        <label class="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                value={res?.eventStatus}
                                                                onClick={handleToggle}
                                                                class="sr-only peer"
                                                                checked={toggle}
                                                            />
                                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                        </label>
                                                    </td>
                                                    <td
                                                        class="whitespace-nowrap px-6 py-4"
                                                        onClick={() => handleEdit(res._id)}
                                                    >
                                                        <BiEditAlt size={23} />
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td class="whitespace-nowrap px-6 py-4">Football(demo)</td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <MdViewColumn size={23} />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <AiOutlineFolderView size={23} />
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                                <BiEditAlt size={23} />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListEvent;
