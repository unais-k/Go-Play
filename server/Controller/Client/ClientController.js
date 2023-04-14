import CityModel from "../../Model/City.js";
import GroundModel from "./../../Model/Grounds.js";

export const CityListResApi = async (req, res, next) => {
    try {
        const cityList = await CityModel.find({});
        res.status(200).json({ result: cityList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const GroundListResApi = async (req, res, next) => {
    try {
        const GroundList = await GroundModel.find({});
        res.status(200).json({ result: GroundList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const FootballGroundResApi = async (req, res, next) => {
    try {
        const find = await GroundModel.aggregate([
            {
                $match: {
                    groundType: "turf",
                },
            },
        ]);
        res.status(201).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};

export const GroundViewResApi = async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id);
        const find = await GroundModel.findOne({ _id: id });
        console.log(find);
        res.status(200).json({ result: find });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
