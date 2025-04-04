import { model, Schema, STATES } from "mongoose";

const studentSchema = new Schema({
    student_id: {
        type: String,
        ref: "users",
        required: true,
        index: true,
    },
    student_aadharNumber: {
        type: String,
        required: true,
    },
    student_dob: {
        type: Date,
        required: true,
    },
    student_education: {
        institute: String,
        year: Number,
        semester: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        rollNo: String,
        resultScore: Number,
        required: true,
    },
    student_financials: {
        annualIncome: String,
        description: String,
        requiredFund: {
            requiredAmount: Number,
            description: String,
        },
        incomeCertificate: String,
    },
    student_documents: {
        scholarReport: String,
        feeStructure: String,
        reportCard: String,
        aadharCard: String,
    },
    student_bankDetails: {
        accountNumber: String,
        ifscCode: String,
        accountHolderName: String,
    },
    // student_extraDocuments: [{
    //     title: String,
    //     fileUrl: String
    // }],

    //verification status
    createdAt: Date,
    updatedAt: Date,
});

export const Student = model("Student", studentSchema);
