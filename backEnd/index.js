const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/saveData", function (req, res) {
    console.log("Request body:", req.body);

    const data = req.body; 

    if (data) {
        console.table(data);
        res.json({
            message: "Data received successfully",
            receivedData: data
        });
    } else {
        console.log("No data received");
        res.status(400).json({ message: "No data received" });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
