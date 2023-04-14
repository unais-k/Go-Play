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
