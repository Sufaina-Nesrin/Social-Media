const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")

dotenv.config();

main().then(console.log('connected to mongodb')).catch(err => console.log(err));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
app.listen(8000,()=>{
    console.log("Backend server is running")
})