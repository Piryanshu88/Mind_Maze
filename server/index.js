const express = require("express");

require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");

const app = express();

app.use(cors({
    origin:"*"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server running at port ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
    
})