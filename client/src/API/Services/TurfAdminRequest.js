import { AxiosTurfAdmin } from "../AxiosInstance";

export const addGroundReqApi = async (data, rows, token) => {
    try {
        const response = AxiosTurfAdmin.post(
            "/ground-add",
            { data, rows },
            {
                headers: { Authorization: "Bearer " + token },
            }
        );
        return response;
    } catch (error) {
        console.log(error.message);
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
        console.log(error.message);
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
        console.log(error.message);
        return error?.response;
    }
};

export const TimeSlotReqApi = async (data, token) => {
    try {
        const response = AxiosTurfAdmin.get(`/find-city?id=${data}`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
        return error?.response;
    }
};

export const AvailableStatusChangeReqApi = (data, id, token) => {
    console.log(data, "data", "id", id, token, "token");
    try {
        const response = AxiosTurfAdmin.patch(`/available-status?id=${id}`, data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
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
        console.log(error.message);
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
        console.log(error.message);
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
        console.log(error.message);
        return error?.response;
    }
};

export const RuleDeleteReqApi = (data, token) => {
    console.log(data, "data", token, "token");

    try {
        const response = AxiosTurfAdmin.delete(`/rule-delete?index=${data.deleteId}&id=${data.id}`, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
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
        console.log(error.message);
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
        console.log(error.message);
        return error?.response;
    }
};

export const SelectedTimeReqApi = async (data, token) => {
    try {
        console.log(data, "data", token, "token");
        const response = AxiosTurfAdmin.post(`/selected-time-slot`, data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
        return error?.response;
    }
};

export const CancelTimeReqApi = async (data, token) => {
    try {
        console.log(data, "data", token, "token");
        const response = AxiosTurfAdmin.post(`/canceled-time-slot`, data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
        return error?.response;
    }
};

export const GroundDetailSubmitReqApi = async (data, id, token) => {
    console.log(id);
    console.log(data, "data", token, "token");
    try {
        const response = AxiosTurfAdmin.post(`/ground-detail-form-submit?id=${id}`, data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        console.log(error.message);
    }
};
