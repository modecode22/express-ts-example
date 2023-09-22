import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/myapp";
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export { PORT, DATABASE_URL, JWT_SECRET };
