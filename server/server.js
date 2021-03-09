const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api/v1", require("./api/api"));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
