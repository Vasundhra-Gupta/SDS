import "./src/config/envLoader.js";
import { app } from "./app.js";
import { connectDB } from "./src/db/connection.js";
const port = process.env.PORT || 4100;
app.listen(port, () => {
    console.log("server is listening at port ", port);
    // console.log("connecting to database...");
});
// connectDB();
