import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

function BannerCard() {
    return (
        <div className="bg-white rounded-lg p-4">
            <div className="container items-center">
                <div className="flex justify-center">
                    <a className="group relative block h-64 sm:h-80 lg:h-96">
                        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                        <div className="relative flex w-96 h-full transform items-end border-2 border-black bg-white transition-transform translate-x-2 translate-y-2">
                            <div className="p-4 w-full !pt-0 transition-opacity sm:p-6 lg:p-8">
                                {/* <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2> */}
                                <div className="flex justify-between">
                                    <span>
                                        <MdDeleteForever size={23} />
                                    </span>
                                    <span>
                                        <FiEdit2 size={23} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BannerCard;
