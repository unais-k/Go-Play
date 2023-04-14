import { generateToken } from "../../Middleware/AuthVerify.js";
import AdminModel from "../../Model/Admin.js";
import CityModel from "../../Model/City.js";
import UserModel from "../../Model/Client.js";
import GroundModel from "../../Model/Grounds.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";
import nodeMailer from "nodemailer";

export const adminLogin = async (req, res, next) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
        const Check = await AdminModel.findOne({ email: email, password: password });
        console.log(Check);
        if (!Check) res.status(401).json({ message: "Email is not valid" });
        if (Check) {
            const token = generateToken(Check._id);
            res.status(200).json({ token: token });
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

export const ApproveTurfAdmin = async (req, res, next) => {
    console.log(req.body);
    try {
        const { id } = req.body;
        const find = await TurfAdminModel.findOne({ _id: id });
        let transporter = nodeMailer.createTransport({
            port: 465, // true for 465, false for other ports
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.NodeMailerEmail,
                pass: process.env.NodeMailerPassword,
            },
        });
        const mailData = {
            from: process.env.NodeMailerEmail, // sender address
            to: find.email, // list of receivers
            subject: "Congratulation",
            text: "That was easy!",
            html: "<b>Hey there! </b> <br>Your request for starting business with go-play.com <br/>  <br>has been approved You can now login with registered credential</br>",
        };
        transporter.sendMail(mailData, async (error, info) => {
            if (error) {
                return console.log(error, 11);
            }
            const findOwner = await TurfAdminModel.findOneAndUpdate({ _id: id }, { $set: { status: true } });
            res.status(200).json({ message: "Mail send", message_id: info.messageId, name: find.name });
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const CancelTurfAdmin = async (req, res, next) => {
    try {
        const { id } = req.body;
        const find = await TurfAdminModel.findById(id);
        let transporter = nodeMailer.createTransport({
            port: 465, // true for 465, false for other ports
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.NodeMailerEmail,
                pass: process.env.NodeMailerPassword,
            },
        });
        const mailData = {
            from: process.env.NodeMailerEmail, // sender address
            to: find.email, // list of receivers
            subject: "Sorry!",
            text: "Some credential is not valid!",
            html: "<b>Hey there! </b> <br>Your request for starting business with go-play.com <br/>  <br>has been canceled, So please Register with correct credentials</br>",
        };
        transporter.sendMail(mailData, async (error, info) => {
            if (error) {
                return console.log(error, 11);
            }
            const findOwner = await TurfAdminModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Mail send", message_id: info.messageId, name: find.name });
        });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const AddCity = async (req, res, next) => {
    try {
        const { data } = req.body;

        const find = await CityModel.findOne({ data });
        if (find) {
            res.status(401).json({ message: "City already exist" });
        } else {
            await CityModel.create({
                City: data,
            }).then(async (data) => {
                const list = await CityModel.find({});
                res.status(201).json({ message: "Created", result: list });
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const FindCity = async (req, res, next) => {
    try {
        const find = await CityModel.find();

        res.status(200).json({ result: find });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const GroundListAdminResApi = async (req, res, next) => {
    try {
        const groundList = await GroundModel.find({});
        res.status(200).json({ result: groundList });
    } catch (error) {
        console.log(error, "error");
        res.status(500).json({ message: error });
    }
};
