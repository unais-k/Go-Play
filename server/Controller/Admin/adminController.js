import AdminModel from "../../Model/Admin.js";
import UserModel from "../../Model/Client.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const Check = await AdminModel.findOne({ email: email, password: password });
        if (!Check) res.status(401).json({ message: "Email is not valid" });
        if (Check) {
            const token = generateToken(Check._id);
            res.status(201).json({ token: token });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const userListReqApi = async (req, res, next) => {
    try {
        const getUser = await UserModel.find({});
        console.log(getUser);
        res.status(200).json({ result: getUser });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const notificationReqApi = async (req, res, next) => {
    try {
        const getTurfAdminRequest = await TurfAdminModel.aggregate([{ $match: { status: false } }]);
        console.log(getTurfAdminRequest);
        res.status(200).json({ result: getTurfAdminRequest });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
