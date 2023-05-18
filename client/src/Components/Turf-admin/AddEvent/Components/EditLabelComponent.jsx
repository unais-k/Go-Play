import React from "react";

function EditLabelComponent({ sport, handleCheckboxSport }) {
    console.log(sport);
    const types = [
        { title: "Football" },
        { title: "Cricket" },
        { title: "Tennis" },
        { title: "Basket ball" },
        { title: "Badminton" },
        { title: "Volley ball" },
    ];
    return (
        <div class="col-span-2">
            <ul className="flex justify-between">
                {types?.map((res, index) => {
                    return (
                        <>
                            {sport?.includes(res.title) ? (
                                <li className="me-2">
                                    <label className="">
                                        {res.title}
                                        <input
                                            className="ms-2"
                                            type="checkbox"
                                            key={index + Math.round(Math.random) * 124}
                                            value={res.title}
                                            onClick={handleCheckboxSport}
                                            checked
                                        />
                                    </label>
                                </li>
                            ) : (
                                <li className="me-2">
                                    <label className="">
                                        {res.title}
                                        <input
                                            className="ms-2"
                                            type="checkbox"
                                            key={index + Math.round(Math.random) * 124}
                                            value={res.title}
                                            onClick={handleCheckboxSport}
                                        />
                                    </label>
                                </li>
                            )}
                        </>
                    );
                })}
            </ul>
        </div>
    );
}

export default EditLabelComponent;
