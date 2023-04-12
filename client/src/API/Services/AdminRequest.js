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
