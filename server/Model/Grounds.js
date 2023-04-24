import mongoose from "mongoose";

const groundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 4,
            max: 30,
            required: true,
        },
        Owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "turf-admin",
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        address: {
            type: String,
        },

        place: {
            type: String,
        },
        phone: {
            type: String,
        },

        images: {
            type: Array,
            required: true,
        },

        available: {
            type: Boolean,
            default: false,
        },

        rules: [
            {
                task: {
                    type: String,
                },
                index: {
                    type: String,
                },
            },
        ],

        description: {
            type: String,
        },
        nearCity: {
            type: String,
        },
        startingTime: {
            type: String,
        },
        closingTime: {
            type: String,
        },
        rating: {
            type: Number,
            default: 0,
        },
        holiday: {
            type: Array,
        },
        reviews: { type: Array },
        status: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const GroundModel = mongoose.model("ground", groundSchema);
export default GroundModel;
