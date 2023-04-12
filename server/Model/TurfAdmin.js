import mongoose from "mongoose";

const turfAdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 4,
            max: 30,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        ground: [
            {
                groundId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "ground",
                },
            },
        ],
        password: {
            type: String,
            required: true,
        },
        aadhar: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const TurfAdminModel = mongoose.model("turf-admin", turfAdminSchema);
export default TurfAdminModel;
