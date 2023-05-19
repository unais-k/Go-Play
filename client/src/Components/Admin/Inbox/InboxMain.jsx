import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChatRequestReqApi, notificationReqApi, turfAdminApproveReq } from "../../../API/Services/AdminRequest";
import { message } from "antd";
import InboxPage from "./Components/InboxPage";
import ChatReqComponent from "./Components/ChatReqComponent";

function InboxMain() {
    const [loader, setLoader] = useState(false);
    const [list, setList] = useState([]);
    const token = useSelector((state) => state.adminLogin.token);
    const [data, setData] = useState([]);

    const getUser = async () => {
        setLoader(true);
        await notificationReqApi(token)
            .then((data) => {
                setList(data.data.result);
                setLoader(false);
            })
            .catch((err) => console.log(err));
    };

    const details = async () => {
        setLoader(true);
        const response = await ChatRequestReqApi(token);
        if (response.status === 201) {
            setData(response.data.result);
            setLoader(false);
        }
    };

    useEffect(() => {
        getUser();
    }, [list && ""]);
    useEffect(() => {
        if (token) details();
    }, [token]);

    const handleApprove = async (e) => {
        const response = await turfAdminApproveReq(e, token);

        if (response.status === 200) {
            await getUser();
            message.success(`You have approved ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };

    const handleCancel = async (e) => {
        const response = await turfAdminApproveReq(e, token);

        if (response.status === 200) {
            await getUser();
            message.warning(`You have canceled ${response.data.name}`);
        } else {
            message.error("Something went wrong");
        }
    };
    return (
        <div>
            <div>
                <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase">Notification</h1>
            </div>

            {list?.map((res) => {
                return (
                    <div key={res._id}>
                        <InboxPage handleApprove={handleApprove} handleCancel={handleCancel} list={res} setList={setList} />
                    </div>
                );
            })}
            <div>
                <h1 className="w-full mx-4 my-3 font-normal text-2xl font-heading uppercase">Chat Request</h1>
            </div>
            {data?.map((res) => {
                return (
                    <div key={res._id}>
                        <ChatReqComponent data={res} />;
                    </div>
                );
            })}
        </div>
    );
}

export default InboxMain;
