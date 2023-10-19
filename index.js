const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const validator = require("validator")
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");


dotenv.config()
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true }).then( ()=>{
    console.log("connection successful to MONGODB")

}).catch(()=>{
    console.log("Connection unsuccessful")
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common")); 
app.use("/api/users", userRoute);

app.listen(6200, ()=>{
    console.log("Backend server is running")
}
);
