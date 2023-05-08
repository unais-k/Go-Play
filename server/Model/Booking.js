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
        bookDate: { type: String },
        time: [
            {
                timeId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "event.slots",
                },
                slots: {
                    type: String,
                },
                price: {
                    type: String,
                },
            },
        ],
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "event",
        },
        payment: { type: String },
        advance: { type: String },
        sport: { type: String },
        advance: { type: String },
        total: { type: String },
        paymentId: { type: String },
        status: { type: String },
        review: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

const bookingModel = mongoose.model("booking", bookingSchema);
export default bookingModel;
