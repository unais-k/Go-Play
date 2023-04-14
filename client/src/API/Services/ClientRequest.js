import { AxiosClient } from "../AxiosInstance";

export const LocationListReqApi = async () => {
    try {
        const response = AxiosClient.get("/city-list");
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const GroundListReqApi = async () => {
    try {
        const response = AxiosClient.get("/ground-list");
        return response;
    } catch (error) {
        return error?.response;
    }
};
