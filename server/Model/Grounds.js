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
        phone: {
            type: String,
        },
        address: {
            type: String,
            required: true,
        },
        pinCode: {
            type: String,
            required: true,
        },

        nearCity: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        priceAtNight: {
            type: Number,
            required: true,
        },
        available: {
            type: Boolean,
            default: false,
        },
        groundType: {
            type: String,
            required: true,
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
        sport: { type: Array },
        reviews: { type: Array },
        size: {
            type: String,
            required: true,
        },
        slots: {
            type: Array,
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const GroundModel = mongoose.model("ground", groundSchema);
export default GroundModel;
