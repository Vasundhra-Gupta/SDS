import { Schema, model } from "mongoose";

const donorSchema = new Schema({
    donor_id: {
        type: String,
        ref: "users",
        required: true,
        index: true,
    },
    totalDonatedAmount: {
        type: Number,
        default: 0
    },
    // donor_type: {
    //     type: String,
    //     enum: ["general", "need-based"],
    //     required: true
    // },    
    donationsCount: {
        type: Number,
        default: 0
    },
    createdAt: Date,
    updatedAt: Date,
});

export const Donor = model("Donor", donorSchema);
