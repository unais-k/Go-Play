import { generateToken } from "../../Middleware/AuthVerify.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";
import bcrypt from "bcrypt";
export const TurfAdminLogin = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const check = await TurfAdminModel.aggregate([{ $match: { email: email, password: password } }]);
        if (!check) res.status(401).json({ message: "Invalid Credential" });
        if (check) {
            const token = generateToken(check._id);
            res.status(201).json({ token: token });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const TurfAdminRegister = async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, email, phone, password, aadhar } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        const newUser = new TurfAdminModel({
            name,
            email,
            aadhar,
            phone,
            status: false,
            password: hashedPassword,
        });
        console.log(newUser);
        await newUser.save();
        return res.status(201).json({ message: "Owner created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
