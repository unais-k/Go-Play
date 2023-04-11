import Axios from "axios";
export const AxiosClient = Axios.create({
    baseURL: "http://localhost:4001/api/client/",
});

export const AxiosAdmin = Axios.create({
    baseURL: "http://localhost:4001/api/admin",
});

export const AxiosTurfAdmin = Axios.create({
    baseURL: "http://localhost:4001/api/turf-admin",
});
