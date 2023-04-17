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
