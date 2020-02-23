const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

//App
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// Routes
app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});
