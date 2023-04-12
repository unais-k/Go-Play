import { AxiosTurfAdmin } from "../AxiosInstance";

export const addGroundReqApi = async (data) => {
    console.log(data, "data");
    try {
        const response = AxiosTurfAdmin.post("/ground-add", data);
        return response;
    } catch (error) {
        return error?.response;
    }
};
