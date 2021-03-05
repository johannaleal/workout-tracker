const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env. PORT || 4000;

const app = express();

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// loggin middleware
app.use(logger("dev"));

// post request middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// statuc folder
app.use(express.static("public"));

// routes
// app.get("/", (req, res) => {
    // response.send("Hello World");
// });

app.listen(PORT, () => {
    console.log(`You are up and running on port ${PORT}`);
})