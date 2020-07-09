const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const cors = require("cors");

const postMessageRoutes = require("./controllers/postMesageController");
connectDB();
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.listen(5000, () => console.log("Server running on port 5000"));

app.use("/postMessages", postMessageRoutes);
