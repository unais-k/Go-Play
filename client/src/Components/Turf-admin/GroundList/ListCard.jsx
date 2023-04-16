import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ListCard({ res }) {
    const navigate = useNavigate();
    const handleView = (id) => {
        console.log(id, `11111`);
        navigate("/turf-admin/ground-view", { state: { id: id } });
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

        // <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
        //     <div className="h-fit w-4/5">
        //         <img className="w-full h-2/5 rounded" src={res.images} alt="Sunset in the mountains" />
        //         <div className="px-6 py-4">
        //             <div className="font-bold text-xl mb-2">{res.name}</div>
        //             <p className="text-gray-700 text-base">{res.address}</p>
        //         </div>
        //         <div className="mx-3 my-2">
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        //                 {res.nearCity}
        //             </span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        //                 {res.place}
        //             </span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        //                 {res.groundType}
        //             </span>
        //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        //                 {res.size}
        //             </span>
        //         </div>
        //         <div className=" flex bg-black w-fit  text-white m-2 py-3 px-4 rounded" onClick={() => handleView(res._id)}>
        //             <button className="me-3">View</button>
        //             <BsFillArrowRightCircleFill size={23} />
        //         </div>
        //     </div>
        // </div>
    );
}

export default ListCard;
