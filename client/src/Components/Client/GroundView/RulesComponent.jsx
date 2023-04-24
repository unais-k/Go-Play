import React, { useEffect, useState } from "react";

function RulesComponent({ state }) {
    const [rule, setRule] = useState([]);
    useEffect(() => {
        if (state) {
            setRule(state.rules);
        }
    });
    return (
        <div>
            <div>
                <div className="text-2xl text-lime-600 font-bold mt-10 mb-5">Rules</div>
            </div>
            <div>
                {rule?.map((res) => {
                    return (
                        <>
                            <div className="font-semibold text-xl"> -{res.task}</div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default RulesComponent;
