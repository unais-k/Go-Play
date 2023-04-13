import { AxiosAdmin } from "../AxiosInstance";

export const notificationReqApi = async () => {
    try {
        const response = AxiosAdmin.get("/notification");
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const clientListReqApi = async () => {
    try {
        const response = AxiosAdmin.get("/client-list");
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const turfAdminApproveReq = async (data) => {
    try {
        const response = AxiosAdmin.post("/approve-turf-admin", data);
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const addCityReqApi = async (data, token) => {
    try {
        const response = AxiosAdmin.post("/add-city", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const findCityReqApi = async (token) => {
    try {
        const response = AxiosAdmin.get("/find-city", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};
