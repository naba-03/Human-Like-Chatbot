const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chatRoute = require("./routes/chat");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/chat", chatRoute);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
console.log("API KEY:", process.env.OPENAI_API_KEY);
console.log("API Key Loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
