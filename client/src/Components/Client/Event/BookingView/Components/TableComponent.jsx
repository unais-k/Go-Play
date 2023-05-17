import React from "react";
import { AiFillFolderOpen } from "react-icons/ai";

function TableComponent({ event, handleSelectView }) {
    return (
        <>
            <tr class="border-b rounded border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">{new Date(event.bookDate).toDateString()}</div>
                </td>
                <td class="py-3 px-6 text-center">
                    <div class="font-medium items-center">
                        {event.time.map((res) => {
                            return (
                                <>
                                    <div className="flex flex-col">{res.slots}</div>
                                </>
                            );
                        })}
                    </div>
                </td>
                <td class="py-3 px-6 text-center">
                    <div onClick={() => handleSelectView(event._id)} class="flex item-center justify-center">
                        <AiFillFolderOpen size={23} />
                    </div>
                </td>
                <td class="py-3 px-6 text-center">
                    {event.status ? (
                        <div class=" font-medium">
                            <span>{event.status}</span>
                        </div>
                    ) : (
                        <div
                            // onClick={() =>
                            //     handleCancel({ id: event._id })
                            // }
                            class=" bg-red-500 text-white font-medium "
                        >
                            <div class="px-3 py-2 ">Cancel</div>
                        </div>
                    )}
                </td>
            </tr>
        </>
    );
}

export default TableComponent;
