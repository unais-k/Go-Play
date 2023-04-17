import timeModel from "../../Model/Time.js";
import TurfAdminModel from "../../Model/TurfAdmin.js";
import { cloudinary } from "../../Utils/Cloudinary.js";
import GroundModel from "./../../Model/Grounds.js";

export const addGroundReq = async (req, res, next) => {
    try {
        const { size, groundType, priceAtNight, price, state, place, nearCity, address, phone, email, picturePath, name } =
            req.body;
        const id = req.user.id;

        const Profile = "profile";
        const result = await cloudinary.uploader
            .upload(picturePath, {
                folder: Profile,
            })
            .catch((err) => {
                console.log(err);
            });
        const newGround = new GroundModel({
            name,
            email,
            address,
            nearCity: nearCity,
            images: result.secure_url,
            Owner: id,
            place,
            phone,
            state,
            price,
            priceAtNight,
            groundType,
            size,
        });
        await newGround.save();

        res.status(200).json({ message: "Ground created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const GroundListResApi = async (req, res, next) => {
    try {
        const id = req.user.id;
        const find = await GroundModel.find({ Owner: id });
        res.status(201).json({ result: find, message: "Full list" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const GroundViewResApi = async (req, res, next) => {
    try {
        const id = req.query.id;
        const find = await GroundModel.findOne({ _id: id }).populate("Owner");
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const TimeSlotResApi = async (req, res, next) => {
    try {
        const find = await timeModel.find({});
        console.log(find);
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
