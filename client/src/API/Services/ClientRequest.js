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

export const FootballListReqApi = async () => {
    try {
        const response = AxiosClient.get("/football-ground-list");
        return response;
    } catch (error) {
        return error?.response;
    }
};

export const GroundViewReqApi = async (id) => {
    console.log(id, "=================");
    try {
        const response = AxiosClient.get(`/ground-view?id=${id}`);
        return response;
    } catch (error) {
        return error?.response;
    }
};
