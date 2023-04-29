import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventAvailable: {
    type: Array,
  },
  groundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ground",
  },
  groundName: {
    type: String,
  },
  size: {
    type: String,
  },
  type: {
    type: String,
  },
  photo: { type: Array },
  price: {
    type: String,
  },
  priceAtNight: {
    type: String,
  },
  slots: [
    {
      index: {
        type: String,
      },
      time: {
        type: String,
      },
      status: {
        type: Boolean,
      },
      isSelected: {
        type: Boolean,
      },
    },
  ],
});

const eventModel = new mongoose.model("event", eventSchema);

export default eventModel;
