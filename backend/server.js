import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})
app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING ${process.env.PORT}`);
})