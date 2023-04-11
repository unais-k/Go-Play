import React, { useState } from "react";

function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const adminFormSubmit = (e) => {
        // e.preventDefault();
        // adminAxios.post("/adminLogin", { email, password }).then((response) => {
        //     const result = response.data.adminResult;
        //     if (result.Status) {
        //         const token = result.token;
        //         dispatch(AdminLogin({ token: token }));
        //         navigate("/admin/admin_home");
        //     } else {
        //         setErrMsg(result.message);
        //     }
        // });
        console.log("submit");
    };

    return (
        <div className="p-3 ">
            <div className="h-screen">
                <div className="">
                    <h1 className="text-center text-2xl mb-16 mt-10 font-semibold text-black font-admin">
                        <b>Welcome Admin</b>
                    </h1>
                </div>
                <div className="w-10/12 md:w-full h-full flex">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                            src="https://wallpaperaccess.com/full/314764.png"
                            className="flex items-center align-center justify-center w-10/12"
                            alt="Sample image"
                        />
                    </div>
                    <div className="md:w-1/2 items-center">
                        <form onSubmit={adminFormSubmit} className="flex flex-col md:items-start">
                            <div className="w-full md:w-2/3 mb-4">
                                <input
                                    type="email"
                                    id="form3Example3"
                                    value={email}
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    className="w-8/12 px-3 ms-8 py-2 border-2 border-gray-400 rounded-lg"
                                    placeholder="Enter a valid email address"
                                />
                            </div>
                            <div className="w-full md:w-2/3 mb-4">
                                <input
                                    type="password"
                                    id="form3Example4"
                                    value={password}
                                    required
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    className="w-8/12 px-3 ms-8 py-2 border-2 border-gray-400 rounded-lg"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="w-full md:w-2/3 mb-4 flex justify-center">
                                <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg">
                                    Login
                                </button>
                            </div>
                            {errMsg.length > 0 && <p className="text-red-500">{errMsg}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLoginPage;
