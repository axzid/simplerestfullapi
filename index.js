import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";

const app = express();
const port = 3000;

//konek ke db 
mongoose.connect("mongodb://localhost:27017/restful_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => console.log('database connected'))

//midleware
app.use(express.json());

// routing page 
app.use("/product", route);

//server listen
app.listen(port,() => console.log(` app listening on port http://localhost:${port}`));