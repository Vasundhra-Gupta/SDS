import { Schema, model } from "mongoose";

const donationSchema = new Schema(
    {
        donation_id: {
            type: String,
            required: true,
            index: true,
        },
        donor_id: {
            type: String,
            ref: "users",
            required: true,
            index: true,
        },   
        student_id: {
            type: String,
            ref: "users",
            required: true,
            index: true,
        },  
        donation_amount: Number,
        donation_paymentMethod: String, 
        donation_status: {
            type: String,
            enum: ["pending", "successful", "failed"],
            default: "pending"
        },
        donor_message: String,
        donation_transactionId: String, 
        donation_createdAt: Date      
});

export const Donation = model("Donation", donationSchema);
