import React, { useState } from "react";

function RulesComponent({ state }) {
    console.log(state);
    const [reviews, setReviews] = useState([]);
    return (
        <div>
            <div>
                <div className="text-2xl text-lime-600 font-bold my-10">Rules</div>
            </div>
        </div>
    );
}

export default RulesComponent;
