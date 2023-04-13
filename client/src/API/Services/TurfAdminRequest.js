import { AxiosTurfAdmin } from "../AxiosInstance";

export const addGroundReqApi = async (data, token) => {
    try {
        const response = AxiosTurfAdmin.post("/ground-add", data, {
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
        return error?.response;
    }
};
