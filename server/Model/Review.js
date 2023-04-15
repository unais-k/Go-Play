import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        turf: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ground",
            required: true,
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        review: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
