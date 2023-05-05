import CityModel from "../../Model/City.js";
import timeModel from "../../Model/Time.js";
import GroundModel from "./../../Model/Grounds.js";
import eventModel from "./../../Model/Events.js";
import mongoose from "mongoose";
import bookingModel from "../../Model/Booking.js";
import UserModel from "../../Model/Client.js";
import reviewModel from "../../Model/Review.js";

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
    const review = await reviewModel.find({ turf: id }).populate("client");
    console.log(review);
    res.status(200).json({ result: find, events: events, review: review });
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
    // console.log(req.body, "body");
    console.log(req.body, "body");
    const { bookingData } = req.body;
    const booking = await bookingModel.create({
      client: req.user.id,
      total: req.body.total[0],
      paymentId: req.body.bookingId,
      advance: req.body.advance[0],
      bookDate: req.body.date,
      sport: bookingData[0].sport,
      event: bookingData[0].eventId,
      turf: bookingData[0].groundId,
      time: req.body.time[0],
    });
    console.log(booking, "booking");
    res.status(201).json({ result: booking });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const UserDataFetchResApi = async (req, res, next) => {
  try {
    const id = req.user.id;
    const find = await UserModel.findOne({ _id: id });
    console.log(find, "find------------");
    res.status(201).json({ result: find });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const UserEditResApi = async (req, res, next) => {
  try {
    const { name, email, phone, city, dob } = req.body;

    const updateUser = await UserModel.updateMany(
      { _id: req.body._id },
      { $set: { name: name, email: email, phone: phone, city: city, dob: dob } }
    );
    console.log(updateUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const UserBookingDetailFetchResApi = async (req, res, next) => {
  try {
    const id = req.user.id;
    console.log(id);
    const find = await bookingModel
      .find({ client: id })
      .populate("turf")
      .populate("event");

    console.log(find);
    res.status(201).json({ result: find });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const BookingDetailViewResApi = async (req, res, next) => {
  try {
    const id = req.query.id;
    const find = await bookingModel
      .findOne({ _id: id })
      .populate("turf")
      .populate("event");
    console.log(find);
    res.status(201).json({ result: find });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const SubmitReviewResApi = async (req, res, next) => {
  try {
    const { text, rating, id } = req.body;
    const setReview = await reviewModel.create({
      rating: rating,
      turf: id,
      client: req.user.id,
      review: text,
    });
    console.log(setReview);
    res.status(201).json({ message: "Submit success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const SearchGroundResApi = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(req.query);
    console.log(req.body)
    let regexp = new RegExp(`^${id}`, "i");
    const find = await GroundModel.aggregate([
      {
        $match: {
          $or: [
            {
              city: regexp,
            },
            {
              address: regexp,
            },
            {
              place: regexp,
            },
          ],
        },
      },
    ]);
    console.log(find);
    res.status(201).json({ result: find });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
