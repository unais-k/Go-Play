import TurfAdminModel from "../../Model/TurfAdmin.js";
import { cloudinary } from "../../Utils/Cloudinary.js";
import GroundModel from "./../../Model/Grounds.js";

export const addGroundReq = async (req, res, next) => {
    console.log(req.body);
    try {
        const { size, groundType, priceAtNight, price, state, place, nearCity, address, phone, email, picturePath, name } =
            req.body;
        const id = req.user;

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
            place,
            state,
            price,
            priceAtNight,
            groundType,
            size,
        });
        await newGround.save();
        console.log(newGround, "newGround");
        res.status(200).json({ message: "Ground created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const GroundList = async (req, res, next) => {
    try {
        const find = await GroundModel.find({});
        res.status(201).json({ result: find, message: "Full list" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
