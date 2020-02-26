const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const tagRoutes = require("./routes/tag");

//App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected Database"));

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// Routes Middleware
app.use("/api", blogRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", tagRoutes);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
