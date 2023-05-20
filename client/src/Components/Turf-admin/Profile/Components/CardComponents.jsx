import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import PopoverRender from "./DropDown";

function CardComponents({ data, setShowModal }) {
    return (
        <>
            <section class="bg-gradient-to-r from-[#cbffba] to-[#d6feff]  w-64 mx-auto rounded-2xl px-8 py-6 shadow-lg">
                <div class="flex items-center justify-between">
                    {/* <span class="text-gray-400 text-sm">2d ago</span> */}

                    {/* <span class="text-emerald-400">
                        <BsThreeDots size={25} />
                    </span> */}
                    <PopoverRender setShowModal={setShowModal} />
                </div>
                <div class="mt-6 w-fit mx-auto">
                    <img src={data?.profile} class="rounded-full w-28 " alt="profile picture" srcset="" />
                </div>
                <div class="mt-8 ">
                    <h2 class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold text-2xl tracking-wide">
                        {data?.name}
                    </h2>
                </div>
                <p class="text-emerald-400 font-semibold mt-2.5">Place</p>
                <p class="text-emerald-400 font-semibold mt-2.5">{data?.place}</p>
            </section>
        </>
    );
}

export default CardComponents;
