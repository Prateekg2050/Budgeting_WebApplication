// packages imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

// dev dependencies
import morgan from "morgan";

// database imports
import connectDb from "./config/db.js";

// middleware imports
import gloabalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/appError.js";

//imports Routes
import userRoutes from "./routes/userRoutes.js";

// config loaded
dotenv.config();

// database connected
connectDb();

// initialize app
const app = express();

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000, // 100 requests per hour
  message: "Too many request from this IP, please try again in an hour",
});
app.use("/", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injections
app.use(mongoSanitize());

// Data sanitizers against XSS
app.use(xss());

// Prevent parameter pollution . Use it at the end because it clears req.query string
app.use(
  hpp({
    whitelist: process.env.WHITELIST,
  })
);

app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// routes
app.use("/user", userRoutes);

// default message
app.get("/", (req, res) => {
  res.send(`Welcome to AORent ${process.env.NODE_ENV} server`);
});

// Not Found Handler
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Gloabal Error Handler
// app.use(gloabalErrorHandler);

//PORT
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server running in`, `${process.env.NODE_ENV}`, `mode on ${PORT}`)
);

// unhandled rejection handler
process.on("unhandledRejection", (err) => {
  console.error(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
