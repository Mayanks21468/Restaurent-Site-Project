import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use(express.json()); // ✅ Important for parsing JSON body

app.post("/api/v1/reservation/send", (req, res) => {
  console.log("Reservation data:", req.body); // for debugging
  res.status(200).json({ message: "Reservation received!" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

