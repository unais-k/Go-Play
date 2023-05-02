import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    turf: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ground",
    },
    bookDate: {
      type: Date,
    },
    time: [
      {
        timeId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "event.slots",
        },
        slots: {
          type: String,
        },
        price:{
            type:String
        }
      },
    ],
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
    payment: {
      type: String,

      default: "Pending",
    },
    advance: { type: String },
    total: {
      type: String,
    },
    paymentId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const bookingModel = mongoose.model("booking", bookingSchema);
export default bookingModel;
