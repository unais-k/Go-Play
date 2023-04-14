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
        size: {
            type: String,
            required: true,
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
