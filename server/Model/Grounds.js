import mongoose from "mongoose";

const groundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 4,
            max: 30,
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
        locality: {
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
        groundType: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const GroundModel = mongoose.model("ground", groundSchema);
export default GroundModel;
