import CityModel from "../../Model/City.js";
import timeModel from "../../Model/Time.js";
import GroundModel from "./../../Model/Grounds.js";
import eventModel from "./../../Model/Events.js";
import mongoose from "mongoose";

export const CityListResApi = async (req, res, next) => {
  try {
    const cityList = await CityModel.find({});
    res.status(200).json({ result: cityList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const TimeSlotResApi = async (req, res, next) => {
  try {
    const find = await timeModel.find({});
    res.status(201).json({ result: find });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
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
          groundType: "",
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
    const find = await GroundModel.findOne({ _id: id });
    const events = await eventModel.find({ groundId: id });
    console.log(events);
    res.status(200).json({ result: find, events: events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

function multiIntersect(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        continue;
      }
      result = result.concat(arr[i].filter((value) => arr[j].includes(value)));
    }
  }
  return Array.from(new Set(result));
}

export const SelectTypeResApi = async (req, res, next) => {
  try {
    const id = req.query.id;
    let event = [];
    const find = await eventModel.find({ groundId: id });
    for (let i = 0; i < find.length; i++) {
      // event = find[i].eventAvailable;
      event.push(find[i].eventAvailable);
    }
    const concatArray = multiIntersect(event);
    res.status(201).json({ result: concatArray });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const GroundFetchOnSelectResApi = async (req, res, next) => {
  try {
    const matchGround = await eventModel.aggregate([
      {
        $match: {
          groundId: new mongoose.Types.ObjectId(req.query.id),
          eventAvailable: req.query.data,
        },
      },
    ]);
    res.status(201).json({ result: matchGround });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const EventFetchOnSelectResApi = async (req, res, next) => {
  try {
    console.log(req.query);
    const findEvent = await eventModel.find({ _id: req.query.id });
    // console.log(findEvent[0]);
    const slotsAvailable = findEvent[0].slots;
    // console.log(slotsAvailable);
    const slow = await slotsAvailable.filter((e) => e.status === true);
    console.log(slow);
    // const slots = slotsAvailable.find({ "slots.status": true });
    // console.log(slots);
    res.status(201).json({ result: findEvent, slots: slow });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const BookingSubmitResApi = async (req, res, next) => {
  try {
    console.log(req.query, "query");
    console.log(req.body, "body");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
