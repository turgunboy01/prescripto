import express from "express";
import dotenv from "dotenv";
import ConnectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

import AuthRoute from "./routes/auth.route.js"; // marshrutlar faylini to'g'ri yo'lda import qilish
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/users.route.js";

dotenv.config(); // .env faylini dastlab o'qib olish

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// MongoDB ga ulanish
ConnectToMongoDB();

// AuthRoute ni marshrut sifatida qo'shish
app.use("/api/auth", AuthRoute);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
