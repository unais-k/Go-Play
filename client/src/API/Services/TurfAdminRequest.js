import { AxiosTurfAdmin } from "../AxiosInstance";

export const addGroundReqApi = async (data, token) => {
    try {
        const response = AxiosTurfAdmin.post("/ground-add", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const findCityReqApi = async (token) => {
    try {
        const response = AxiosTurfAdmin.get("/find-city", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const GroundListReqApi = async (token) => {
    try {
        const response = AxiosTurfAdmin.get("/ground-list", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const GroundViewReqApi = async (data, token) => {
    try {
        const response = AxiosTurfAdmin.get(`/ground-view?id=${data}`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const TimeSlotReqApi = async (token) => {
    try {
        const response = AxiosTurfAdmin.get("/time-slot", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const AvailableStatusChangeReqApi = (data, token) => {
    try {
        const response = AxiosTurfAdmin.patch("/available-status", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const TimeSettingReqApi = (data, token) => {
    try {
        const response = AxiosTurfAdmin.post("/time-setting", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const FindRuleReqApi = (data, token) => {
    try {
        const response = AxiosTurfAdmin.get(`/rule-fetch?id=${data.id}`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const RuleAddReqApi = (data, token) => {
    console.log(data, "data");
    try {
        const response = AxiosTurfAdmin.post(
            "/rule-add",
            { data: data },
            {
                headers: { Authorization: "Bearer " + token },
            }
        );
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const RuleDeleteReqApi = (data, token) => {
    console.log(data, "data", token, "token");

    try {
        const response = AxiosTurfAdmin.delete("/rule-delete", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const RuleUpdateFindReqApi = (data, token) => {
    console.log(data, "data", token, "token");
    try {
        const response = AxiosTurfAdmin.get(`/rule-update-find?id=${data.id}&index=${data.index}`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};

export const RuleUpdateReqApi = (data, token) => {
    try {
        const response = AxiosTurfAdmin.patch("/rule-update", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error);
        return error?.response;
    }
};
