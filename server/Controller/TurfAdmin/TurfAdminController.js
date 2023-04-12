import TurfAdminModel from "../../Model/TurfAdmin.js";

export const addGroundReq = async (req, res, next) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(111);
        console.log(error);
        // res.status(500).json({ error: error.message });
    }
};
