import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ListCard({ res }) {
    const navigate = useNavigate();
    const handleView = (id) => {
        navigate("/turf-admin/ground-view/" + id);
    };
    return (
        <article class="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
                <img alt="Placeholder" class="block h-auto w-full" src={res.images} />
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                    <a class="no-underline hover:underline text-black" href="#">
                        {res.name}
                    </a>
                </h1>
                <p class="text-grey-darker text-sm">{res.place}</p>
            </header>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                    <p class="ml-2 text-sm">{res.nearCity}</p>
                </a>
                <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <div
                        className=" flex bg-black w-fit  text-white m-2 py-3 px-4 rounded"
                        onClick={() => handleView(res._id)}
                    >
                        <button className="me-3">View</button>
                        <BsFillArrowRightCircleFill size={23} />
                    </div>
                </a>
            </footer>
        </article>
    );
}

export default ListCard;
