import { Schema, model } from "mongoose";

const counsellingSchema = new Schema({
    session_id: {
        type: String,
        required: true,
        index: true,
    },
    counsellor_id: {
        type: String,
        ref: "users",
        required: true,
        index: true,
    },
    studentId: {
        type: String,
        ref: "users",
        required: true,
        index: true,
    },
    session_status: {
        type: String,
        enum: ["scheduled", "completed", "cancelled"],
        default: "scheduled",
    },
    session_date: Date,
    session_ink: {
        type: String,
        required: true,
    },
    session_feedback: String,
    session_notes: String,
    session_rating: {
        type: Number,
        min: 1,
        max: 5,
    },
});

export const Counsellor = model("Counsellor", counsellingSchema);
