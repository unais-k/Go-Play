import { AxiosAdmin } from "../AxiosInstance";

export const notificationReqApi = async (token) => {
    try {
        const response = AxiosAdmin.get("/notification", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const clientListReqApi = async (token) => {
    try {
        const response = AxiosAdmin.get("/client-list", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const turfAdminApproveReq = async (data, token) => {
    try {
        const response = AxiosAdmin.post("/approve-turf-admin", data, {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const turfAdminCancelReqApi = async (data, token) => {
    try {
        const response = AxiosAdmin.post("/cancel-turf-admin", data, {
            headers: { Authorization: "Bearer " + token },
        });
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

export const groundListAdminReqApi = async (token) => {
    try {
        const response = AxiosAdmin.get("/ground-list", {
            headers: { Authorization: "Bearer " + token },
        });
        return response;
    } catch (error) {
        return error?.response;
    }
};
