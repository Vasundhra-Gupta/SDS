import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URL}+ ${process.env.MONGODB_DATABASE}`);
        console.log("connected to database succesully, ", conn.connection.port, conn.connection.host)
    } catch (error) {
        console.log(error);
    }
};
