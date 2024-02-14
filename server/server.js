const express = require("express");
const userRouter = require("./routers/user.js");
const profileRouter = require("./routers/profile.js");
const photoRouter = require("./routers/photo.js");
const cors = require("cors");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/photo", photoRouter);

//Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
module.exports = app;
