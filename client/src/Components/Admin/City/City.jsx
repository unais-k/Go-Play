import React, { useEffect, useState } from "react";
import { addCityReqApi, findCityReqApi } from "../../../API/Services/AdminRequest";
import { useSelector } from "react-redux";
import { message } from "antd";

function CityPage() {
    const token = useSelector((state) => state.adminLogin.token);
    console.log(token, "Admin Token City");
    const [state, setState] = useState("");
    const [list, setList] = useState([]);
    console.log(state, "state hereeeeeeeeeee");
    console.log(list, "list");
    useEffect(() => {
        findCity();
    }, [state]);

    const findCity = async () => {
        await findCityReqApi().then(async (response) => {
            console.log(response, "response");
            if (response.status === 200) {
                setList(response.data.result);
            } else {
                message.error("Something went wrong find");
            }
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (state === "") {
        //     message.error("Please fill the field");
        // } else {
        //     setList(...list, state);
        // }

        const response = addCityReqApi({ data: state }, token);
        if (response.status === 201) {
            setList(response.data.result);
            message.success("City created");
        } else {
            message.error("Something went wrong");
        }
    };
    return (
        <div>
            <div>
                <h1 className="w-full ms-4 my-3 font-normal text-2xl  font-heading uppercase">City-List</h1>
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <div class="card w-full bg-base-100 shadow-xl my-3 mx-4 rounded p-3 flex">
                        <input
                            class="shadow appearance-none border rounded w-full ps-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            name="city"
                            type="city"
                            onChange={(e) => setState(e.target.value)}
                            placeholder="Enter a new City"
                        />

                        <div class="card-actions m-3">
                            <button class="bg-blue-700 px-4 py-2 rounded text-dark" type="submit">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-10">
                <div className="">
                    <div className="min-w-screen  flex items-center justify-center font-sans overflow-hidden">
                        <div className="w-2/5 h-fit ">
                            <div className="bg-white shadow-md overflow-y-auto rounded my-6">
                                <table className="min-w-max w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-left">City</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600 text-xl font-admin h-[100px] overflow-y-scroll">
                                        {list.map((res, index) => {
                                            return (
                                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                    <td className="py-3 px-6">
                                                        <div className="flex items-left">{res.City}</div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityPage;
