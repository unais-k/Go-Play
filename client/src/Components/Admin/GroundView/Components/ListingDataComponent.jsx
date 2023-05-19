import React from "react";

import { AiOutlineFolderView } from "react-icons/ai";
import { MdViewColumn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ListingDataComponent({ event }) {
    const navigate = useNavigate();
    const handleView = (id) => {
        navigate("/admin/event-view/" + id);
    };
    return (
        <tbody>
            {event?.length ? (
                event?.map((res, index) => {
                    return (
                        <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                            <td class="whitespace-nowrap px-6 py-4">{res.groundName}</td>
                            <td class="whitespace-nowrap px-6 py-4" onClick={() => handleView(res._id)}>
                                <MdViewColumn size={23} />
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
                </tr>
            )}
        </tbody>
    );
}

export default ListingDataComponent;
