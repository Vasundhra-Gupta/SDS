import { model, Schema } from "mongoose";
import bcryptjs from "bcryptjs";
const userSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        index: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    user_firstName: {
        type: String,
        required: true,
    },
    user_lastName: {
        type: String,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
        minlength: 6,
    },
    user_avatar: {
        type: String,
        required: true,
    },
    user_gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    user_role: {
        type: String,
        enum: ["student, donor, counsellor"],
        required: true,
    },
    user_contact: {
        type: String,
    },
    user_address: {
        type: String,
    },
    user_token: {
        type: String,
        default: "",
    },
    user_bio: {
        type: String,
        default: "",
    },
    user_createdAt: {
        type: Date,
        default: Date.now(),
    },
    user_updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

//hooks

userSchema.pre("save", async function (next) {
    if (this.isModified("user_password"))
        this.user_password = await bcryptjs.hash(this.user_password, 10);
    next();
});

export const User = model("User", userSchema);

const selectedStudentSchema = new Schema({
    student_id:{
        type: String,
        ref: "students",
        required: true,
        index: true,
    }
})

export const Selectedstudent = model("Selectedstudent", selectedStudentSchema)
