import CityModel from "../../Model/City.js";
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

export const FindCity = async (req, res, next) => {
    try {
        const find = await CityModel.find({});
        console.log(find);
        res.status(200).json({ result: find });
    } catch (error) {
        res.status(500).json({ message: error });
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
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const AvailableStatusChangeResApi = async (req, res, next) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const RuleFindResApi = async (req, res, next) => {
    try {
        const id = req.query.id;
        const find = await GroundModel.findOne({ _id: id });
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const RuleAddResApi = async (req, res, next) => {
    try {
        const id = req.body.data.id;
        const data = req.body.data;
        console.log(data);
        const response = await GroundModel.updateOne(
            { _id: id },
            { $addToSet: { rules: { task: data.task, index: data.index } } }
        );

        const find = await GroundModel.find({ _id: id });
        console.log(find);
        res.status(201).json({ result: find });
        // console.log(response, "response");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const RuleDeleteResApi = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(req.body);
        // const response = await GroundModel.findOneAndUpdate(
        //     { _id, id },
        //     { $push: { rules: { $each: [{ index: req.body.index }, { rule: req.body.rule }] } } }
        // );
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const RuleUpdateFindResApi = async (req, res, next) => {
    try {
        const id = req.query.id;
        const find = await GroundModel.findOne({ _id: id, "rules.index": req.query.index });
        res.status(201).json({ result: find.rules });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const RuleUpdateResApi = async (req, res, next) => {
    try {
        const index = req.body.data.index;
        const id = req.body.id;
        const response = await GroundModel.findOneAndUpdate(
            { _id: id, "rules.index": index },
            { $set: { "rules.$.task": req.body.data.task } },
            { new: true }
        );
        res.status(202).json({ result: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
