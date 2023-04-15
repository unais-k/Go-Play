import TurfAdminModel from "../../Model/TurfAdmin.js";
import { cloudinary } from "../../Utils/Cloudinary.js";
import GroundModel from "./../../Model/Grounds.js";

export const addGroundReq = async (req, res, next) => {
    console.log(req.body);
    console.log(req.body.phone, "---------------------------------phone--------------------");

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
        console.log(newGround, "newGround");
        res.status(200).json({ message: "Ground created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const GroundListResApi = async (req, res, next) => {
    try {
        const id = req.user.id;
        console.log(id);
        const find = await GroundModel.find({ Owner: id });

        console.log(find);
        res.status(201).json({ result: find, message: "Full list" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
