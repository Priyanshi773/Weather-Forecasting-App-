import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/weather/:City", async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.message || "Server Error",
    });
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
